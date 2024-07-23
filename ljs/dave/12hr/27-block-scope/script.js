// // {{{ Block Scope

// const x = 100;

// if (true) {
//     const y = 200;
//     console.log(x + y); // 300
// };

// // console.log(x + y); // y is not defined
// //  }}}
// // For Loop;{{{
// for (let i = 1; i <= 10; i++) {
//     console.log(i); // loops 1 through 10
// };
// // console.log(i); // i is not defined
// // }}}
// // {{{ var let const in block scope

// if (true) {
//     const a = 500;
//     let b = 200;
//     var c = 900;
// };

// // console.log(a); // a is not defined
// // console.log(b); // b is not defined
// console.log(c); // 900 ; var is not block scope

// //  }}};
// {{{ var is a functions scope

function run(c) {
    var d = 100;
    console.log(d);
}

run();

// console.log(d); // d is not defined ; we still get error even though we use var, It didn't work in function body, var is function scope

//  }}};
// {{{ const and var in window Object

const foo = 1; // didn't showed in window Object
var bar = 2; // show in window Object

//  }}};
