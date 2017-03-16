var fs = require('fs');
// var dirname = fs.readdirSync(__dirname); // 同步

fs.readdir('.', async) // 异步
function async (error, file) {
    console.log(file);
}
// console.log(dirname);
console.log('test');