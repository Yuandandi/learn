// // {{{ nest to the right

// let str = "";

// for (let i = 0; i <= 5; i++) {
//   str += "*"; // string concateneate
// }

// console.log(str)

// // *****

// // }}}
// // {{{ Next Line

// let str = "";

// for (let i = 0; i <= 5; i++) {
//   str += "*"; // string concateneate
//   str += "\n"; // next line
// }

// console.log(str) 
// // *
// // *
// // *
// // *
// // *
// // *


// // }}}
// // {{{ nested for

// let str = "";
// let baris = 5
// let kolom = 10

// for (let i = 1; i <= baris; i++) {
//   for (let j = 1; j <= kolom; j++) {
//     str += "*"
//   }
//   str += "\n"; // next line
// }

// console.log(str)  
// // **********
// // **********
// // **********
// // **********
// // **********



// // }}}
// // {{{ nested for half triangle

// let str = "";
// let baris = 5

// for (let i = 1; i <= baris; i++) {
//   for (let j = 1; j <= i; j++) {
//     str += "*"
//   }
//   str += "\n"; // next line
// }

// console.log(str);
// // *
// // **
// // ***
// // ****
// // *****



// // }}}
// {{{ nested for half triangle

let str = "";
let baris = 5

for (let i = 10; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    str += "*"
  }
  str += "\n"; // next line
}

console.log(str); 
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

// }}}
