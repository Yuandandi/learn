// {{{ Type Assertion

type One = string;
type Two = string | number;
type Three = "Hello"

// convert to more or less specific
let a: One = "Hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

console.log(a, b, c); // Hello, Hello, Hello

// type assignment with '<>' angle brackets
// we can't use this in .tsx file (eg react)
let d = <One>'world' // with alias
let e = <string | number>90; // direct type

console.log(d, e); // world 90

// assertion for narrowing

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if (c === "add") return a + b;
    return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;
let myNextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string; // conversion type of number to type "string" may be mistake
(10 as unknown) as string;

// }}}
