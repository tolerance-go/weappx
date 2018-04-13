const fs = require('fs');
const path = require('path');
const cwd = process.cwd();
const resolveGlobalPath = path.join(cwd, './lib/global.js');
console.log(resolveGlobalPath)
if (fs.existsSync(resolveGlobalPath)) {
  let content = fs.readFileSync(resolveGlobalPath, { encoding: 'utf8' });
  content = content.replace('{};', 'wx;');
  fs.writeFileSync(resolveGlobalPath, content, { encoding: 'utf8' });
  console.log('replace globalObject {} => wx success')
}
