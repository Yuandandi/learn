"use strict";
;
let myName;
let userName;
userName = "Dave";
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("foo");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
console.log(subtract(3, 9));
;
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(4, 3));
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    ;
    return a + b;
};
const sumAll = (a = 10, b, c) => {
    return a + b + c;
};
logMsg(addAll(4, 9));
logMsg(addAll(4, 9, 9));
logMsg(sumAll(3, 8, 9));
logMsg(sumAll(undefined, 2, 4));
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNubmer = (value) => {
    return typeof value == "number" ? true : false;
};
logMsg(isNubmer(90));
logMsg(isNubmer("foo"));
const numberOrString = (value) => {
    if (typeof value == "string")
        return "string";
    if (typeof value == "number")
        return "number";
    return createError("this should never happened");
};
console.log(numberOrString("foo"));
logMsg(numberOrString(90));
