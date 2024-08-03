"use strict";
// {{{ Type Assertion
// convert to more or less specific
let a = "Hello";
let b = a; // less specific
let c = a; // more specific
console.log(a, b, c); // Hello, Hello, Hello
// type assignment with '<>' angle brackets
// we can't use this in .tsx file (eg react)
let d = 'world'; // with alias
let e = 90; // direct type
console.log(d, e); // world 90
// assertion for narrowing
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
let myNextVal = addOrConcat(2, 2, "concat");
// 10 as string; // conversion type of number to type "string" may be mistake
10;
// }}}
