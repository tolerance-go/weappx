const vfs = require('vinyl-fs');
const babel = require('babel-core');
const through = require('through2');
const chalk = require('chalk');
const rimraf = require('rimraf');
const { readdirSync, readFileSync, writeFileSync, existsSync } = require('fs');
const { join, parse } = require('path');
const chokidar = require('chokidar');
const webpack = require('webpack');
const wbMerge = require('webpack-merge');
const UglifyJS = require('uglify-js');

const webpackConfig = require('../webpack.config.js');

const lib = process.env.ES ? 'es' : 'lib';

const cwd = process.cwd();

function transform(opts = {}) {
  const { content, path } = opts;
  console.log(chalk['blue'](`[TRANSFORM] ${path.replace(`${cwd}/`, '')}`));
  return babel.transform(content, {
    presets: [require('babel-preset-env')],
    plugins: ['add-module-exports', 'transform-object-rest-spread'],
  }).code;
}

function buildPkg(pkg) {
  rimraf.sync(join(cwd, 'packages', pkg, lib));
  vfs
    .src(`./packages/${pkg}/src/**/*.js`)
    .pipe(
      through.obj((f, enc, cb) => {
        f.contents = new Buffer( // eslint-disable-line
          transform({
            content: f.contents,
            path: f.path,
          })
        );
        cb(null, f);
      })
    )
    .pipe(vfs.dest(`./packages/${pkg}/${lib}/`));
}

function bundlePkg(pkg) {
  const distDir = join(cwd, `./packages/${pkg}/dist`);
  const filename = pkg + '.js';

  webpack(
    wbMerge(
      {
        entry: `./packages/${pkg}/src/index.js`,
        output: {
          path: distDir,
          library: pkg,
          filename,
        },
      },
      webpackConfig
    ),
    (err, stats) => {
      if (err || stats.hasErrors()) {
        throw new Error('bunld error', err);
      }
      console.log('bundle', pkg, 'success!');
      const result = UglifyJS.minify(readFileSync(join(distDir, filename), 'utf-8'));

      if (result.error) {
        throw new Error('uglify error', result.error);
      }
      writeFileSync(join(distDir, pkg + '.min.js'), result.code, 'utf-8');
      console.log('uglify', pkg, 'success!');
    }
  );
}

function build() {
  const dirs = readdirSync(join(cwd, 'packages'));
  const arg = process.argv[2];
  const isWatch = arg === '-w' || arg === '--watch';
  dirs.forEach(pkg => {
    if (pkg.charAt(0) === '.') return;
    buildPkg(pkg);
    bundlePkg(pkg);
    if (isWatch) {
      const watcher = chokidar.watch(join(cwd, 'packages', pkg, 'src'), {
        ignoreInitial: true,
      });
      watcher.on('all', (event, fullPath) => {
        if (!existsSync(fullPath)) return;
        const relPath = fullPath.replace(`${cwd}/packages/${pkg}/src/`, '');
        const content = readFileSync(fullPath, 'utf-8');
        try {
          const code = transform({
            content,
            path: fullPath,
          });
          writeFileSync(join(cwd, 'packages', pkg, lib, relPath), code, 'utf-8');
        } catch (e) {
          console.log(chalk.red('Compiled failed.'));
          console.log(chalk.red(e.message));
        }
      });
    }
  });
}

build();
