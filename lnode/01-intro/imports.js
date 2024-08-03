// // {{{ import all the modules in specified file
// const math = require("./math.js"); // imports the module (you can remove the '.js')
// console.log(math.add(2,3));
// // }}}

// {{{ Destructure the Module

// you can choose which module you want to use;
const { add, subtract, multiply, divide } = require("./math");

console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));

// }}};
