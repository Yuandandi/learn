// {{{ Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[]; // string or number array // string or number array

interface Guitarist { 
    name?: string, 
    active: boolean,
    album: (string | number)[]
};

type UserId = stringOrNumber;

// interface PostId = stringOrNumber;
// interface is like Object or classes different with types is an alias of any type you declare

// }}}
// {{{ Literal Type

let myName: "";
// myName = "john"; // type 'john' is not assignable to type "Dave"

let userName: "Dave" | "John" | "Amy"; // only expects these 3 values

userName = "Dave"

// // }}};
// {{{ Functions

// const add = (a, b) => { // E: implicitly has "any type"
const add = (a: number, b: number ) => { 
    return a + b;
};

// // }}};
// {{{ Void With Arrow Function

// any function that has no 'return' statement should has a 'void' type of return data;
const logMsg = (message: any): void => { // means no return at all
    console.log(message)
};

logMsg("foo"); // foo
logMsg(add(2, 3)); // 5
// logMsg(add("a", 3)); // string can't to number

// // }}};
// {{{ Traditional Function

let subtract = function (c: number, d: number): number {
    return c - d
};

console.log(subtract(3, 9));

// // }}};
// {{{ mathFunction

// Using function;
// expect paramters number and the return number;
// type mathFunction = (a: number, boolean: number) => number;

// Using interface same as above still works
interface mathFunction {
    (a: number, boolean: number): number
};

// type aliases
let multiply: mathFunction = function (c, d) {
    return c * d;
};

logMsg(multiply(4,3)); // 12

// }}}
// {{{ Optional Parameters

// const addAll = (a: number, b: number, c: number): number => {
//     return a + b + c
// };

// ? is optional therefore It possibly undefined in return state
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c
    };
    return a + b;
};

// Default Parameters Value;
// ? is optional therefore It possibly undefined in return state
// a = 10 ; therefore you need to passing "undefined" in the result statement;
const sumAll = (a: number = 10, b: number, c: number): number => {
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
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr); // reduce() method good for summing the array
};

logMsg(total(1, 2, 3, 4)); // 10

// }}}
// {{{ Never Type

const createError = (errMsg: string) => {
    throw new Error(errMsg)
};

// logMsg(createError("jangan ya dek ya"))

// }}};
// {{{ Never Type

const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;
        if (i > 100) break // add this to avoid endless loop
    }
};

const isNubmer = (value: any): boolean => {
    return typeof value == "number" ? true : false // if number is true else false
};

logMsg(isNubmer(90)); // true ; only number is true
logMsg(isNubmer("foo")); // false

// Use of Never Typ;
const numberOrString = (value: number | string): string => {
    if (typeof value == "string") return "string";
    if (typeof value == "number") return "number";
    return createError("this should never happened"); // returning never type
}

console.log(numberOrString("foo")); // string
logMsg(numberOrString(90)); // number
// console.log(numberOrString(false)); // type error

// }}};
