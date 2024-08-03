// console.log("Hello world"); // we can run both in browser or in node terminal
// console.log(global); // global Object

const os = require("os");
const path = require("path");

// console.log(os.type()); // Linux
// console.log(os.version()); // #1 SMP PREEMPT_DYNAMIC Thu, 18 Jul 2024 18:06:13 +0000
// console.log(os.homedir()); // /home/danzor

// console.log(__dirname); // /home/danzor/repos/github.com/yuandandi/learn/nodejs ; current directory name
// console.log(__filename); // /home/danzor/repos/github.com/yuandandi/learn/nodejs/server.js ; current filename full path

// console.log(path.dirname(__filename)); // /home/danzor/repos/github.com/yuandandi/learn/nodejs ; same as above
// console.log(path.basename(__filename));  // server.js ; filename only
// console.log(path.extname(__filename));  // .js ; extension name only

console.log( path.parse(__filename) ); // Object will all of the value bellow
// {
  // root: '/',
  // dir: '/home/danzor/repos/github.com/yuandandi/learn/nodejs',
  // base: 'server.js',
  // ext: '.js',
  // name: 'server'
// }

