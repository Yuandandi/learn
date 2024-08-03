"use strict";
// {{{ Type Aliases
;
// interface PostId = stringOrNumber;
// interface is like Object or classes different with types is an alias of any type you declare
// }}}
// {{{ Literal Type
let myName;
// myName = "john"; // type 'john' is not assignable to type "Dave"
let userName; // only expects these 3 values
userName = "Dave";
// // }}};
// {{{ Functions
// const add = (a, b) => { // E: implicitly has "any type"
const add = (a, b) => {
    return a + b;
};
// // }}};
// {{{ Void With Arrow Function
// any function that has no 'return' statement should has a 'void' type of return data;
const logMsg = (message) => {
    console.log(message);
};
logMsg("foo"); // foo
logMsg(add(2, 3)); // 5
// logMsg(add("a", 3)); // string can't to number
// // }}};
// {{{ Traditional Function
let subtract = function (c, d) {
    return c - d;
};
console.log(subtract(3, 9));
;
// type aliases
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(4, 3)); // 12
// }}}
// {{{ Optional Parameters
// const addAll = (a: number, b: number, c: number): number => {
//     return a + b + c
// };
// ? is optional therefore It possibly undefined in return state
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    ;
    return a + b;
};
// Default Parameters Value;
// ? is optional therefore It possibly undefined in return state
// a = 10 ; therefore you need to passing "undefined" in the result statement;
const sumAll = (a = 10, b, c) => {
    return a + b + c;
};
// we can passing 2 or 3 parameter
logMsg(addAll(4, 9)); // 13
logMsg(addAll(4, 9, 9)); // 22
logMsg(sumAll(3, 8, 9)); // 20
logMsg(sumAll(undefined, 2, 4)); // 16 ; 
// }}};
// {{{ Rest Parameter
// array filled with number;
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr); // reduce() method good for summing the array
};
logMsg(total(1, 2, 3, 4)); // 10
// }}}
// {{{ Never Type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// logMsg(createError("jangan ya dek ya"))
// }}};
// {{{ Never Type
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // add this to avoid endless loop
    }
};
const isNubmer = (value) => {
    return typeof value == "number" ? true : false; // if number is true else false
};
logMsg(isNubmer(90)); // true ; only number is true
logMsg(isNubmer("foo")); // false
// Use of Never Typ;
const numberOrString = (value) => {
    if (typeof value == "string")
        return "string";
    if (typeof value == "number")
        return "number";
    return createError("this should never happened"); // returning never type
};
console.log(numberOrString("foo")); // string
logMsg(numberOrString(90)); // number
// console.log(numberOrString(false)); // type error
// }}};
