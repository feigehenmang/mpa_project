const fs = require('fs');
const path = require('path');
const dirs = fs.readdirSync(path.resolve(__dirname, '../src/pages/'));
let entrys = {};
dirs.forEach(dir => {
  entrys[dir] = path.resolve(__dirname, '../src/pages/', dir, `${dir}.js`);
})
console.log(entrys);
module.exports = {
  entrys: entrys
}