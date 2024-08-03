"use strict";
let a = "Hello";
let b = a;
let c = a;
console.log(a, b, c);
let d = 'world';
let e = 90;
console.log(d, e);
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
let myNextVal = addOrConcat(2, 2, "concat");
10;
