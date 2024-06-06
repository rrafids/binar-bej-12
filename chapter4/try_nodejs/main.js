const User = require('./user');
const colors = require('colors');

function main() {
  console.log(colors.green('Ini tulisan warna hijau'));
  console.log(colors.red('Ini tulisan warna merah'));
}

main();