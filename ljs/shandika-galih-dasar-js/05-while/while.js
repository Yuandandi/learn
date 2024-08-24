// // Stupid Way to Repeat an Action{{{

// console.log("Hello World!")
// console.log("Hello World!")
// console.log("Hello World!")
// console.log("Hello World!")
// console.log("Hello World!")
// console.log("Hello World!")
// console.log("Hello World!")
// console.log("Hello World!")
// console.log("Hello World!")
// console.log("Hello World!")


// // }}}
// {{{ While Keyword

// // Syntax{{{
// while ( condition ) {
//   action
// };}}}
// // Infinite Loop / Loop Forever{{{
// while ( true ) {
//   console.log("welcome")
// };}}}
// // Stop by the User{{{
// let ulang = true;
// while ( ulang ) {
//   console.log("Hello world")
//   ulang = confirm("again?")
//   // ok will console again, cancel will stop the box
// };}}}
// // Stop by the Program;{{{
// let number = 1;

// while (number <= 5) {
//   console.log("Hello world!");
//   number++; // same as number = number + 1
// }

// this will console 5 times;
// 1 2 3 4 5 met condition then stop}}}
// {{{ Hello world 1 - 100x

let number = 1;

while ( number <= 100 ) {
  console.log(`Hello world ${number}x`); // string literal
  console.log('Hello world' + number + 'x'); // string concatenate
  number++;
}

// }}}

// }}} 
