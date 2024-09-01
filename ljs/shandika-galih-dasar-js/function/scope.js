// // JavaScript if function scope NOT a block scope{{{
// var i = 2;

// if (i % 2 === 0) {
//   var genap = true;
// }

// if (genap) {
//   console.log("genap")
// }
// // this program still run, even though the 'genap' is in other block}}}
// // {{{ Global Scope

// let a = 1; 

// console.log(a)
// // console.log(window.a); // works in browser will return 1
// // console.log(a === window.a) // true

// // }}}
// // {{{ Function Scope

// let a = 1;

// function tes() {
//     let b = 2
//     console.log(b); // if we move b inside the function It will return 2
// }

// tes();
// // console.log(b); // b is not defined

// // }}}
// // {{{ Behave Local and Global Scope

// let a = 1;

// function test() {
//     let a = 2; // even though It has the same name but it's two different variable
//     console.log(a); // 2
//     // console.log(window.a); // in browser return 1
// };

// test();
// console.log(a); // 1

// // }}};
// // {{{ More

// let a = 1;

// function tez() {
//     a = 4; // if there's no "let, var, const" It will take the global scope and reassign the value
//     console.log(a); // 4
// };

// tez(); 

// console.log(a); // 4

// // }}};
// // {{{ Parameter as a Variable

// let a = 1;

// function diz(a) { // parameter a will set as a local variable (let a = 2)
//     console.log(a);
// };

// diz(2); // 2
// console.log(a); // 1

// // }}};
// {{{ Some Confusion

let a = 1;

function foo(a) { // this 2 still a local variable but not used in here
    console.log(a);
}

// both are referencing to global scope;
foo(a); // 1
console.log(a); // 1

// }}};
