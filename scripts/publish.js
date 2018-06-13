#!/usr/bin/env node

const shell = require('shelljs');
const { join } = require('path');
const { fork } = require('child_process');

if (shell.exec('npm config get registry').stdout.indexOf('https://registry.npmjs.org/') === -1) {
  console.error('Failed: set npm registry to https://registry.npmjs.org/ first');
  process.exit(1);
}

const cwd = process.cwd();
const ret = shell.exec('./node_modules/.bin/lerna updated').stdout;
const updatedRepos = ret
  .split('\n')
  .map(line => line.replace('- ', ''))
  .filter(line => line !== '');

if (updatedRepos.length === 0) {
  console.log('No package is updated.');
  process.exit(0);
}

const { code: buildCode } = shell.exec('npm run build');
if (buildCode === 1) {
  console.error('Failed: npm run build');
  process.exit(1);
}

const prompt = require('inquirer').createPromptModule();
prompt([
  {
    name: 'package',
    type: 'checkbox',
    message: '选择发布的包',
    choices: updatedRepos,
  },
])
  .then(input => {
    if (!input.package.length) {
      return console.log('no select npm prepublish!');
    }

    const ignores = updatedRepos.filter(item => !input.package.includes(item));

    const cp = fork(
      join(process.cwd(), 'node_modules/.bin/lerna'),
      ignores
        .reduce(
          (a, b) => {
            a.push('--ignore');
            a.push(b);
            return a;
          },
          ['publish', '--skip-npm', '--conventional-commits']
        )
        .concat(process.argv.slice(2)),
      {
        stdio: 'inherit',
        cwd: process.cwd(),
      }
    );
    cp.on('error', err => {
      console.log(err);
    });
    cp.on('close', code => {
      console.log('code', code);
      if (code === 1) {
        console.error('Failed: lerna publish');
        process.exit(1);
      }

      require('inquirer')
        .createPromptModule()([
          {
            name: 'npm',
            type: 'confirm',
            message: '是否发布npm',
          },
        ])
        .then(input => {
          if (input.npm) {
            publishToNpm();
          }
        });
    });

    function publishToNpm() {
      console.log(`repos to publish: ${input.package.join(', ')}`);
      input.package.forEach(repo => {
        shell.cd(join(cwd, 'packages', repo));
        console.log(`[${repo}] npm publish`);
        shell.exec(`npm publish`);
      });
    }
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
