// let username = "danzor"// {{{
// console.log(username);

// let a: number = 12;
// let b: string = '6';
// let c: number = 2;

// console.log(a / b);
// console.log(a * b);// }}}
// {{{

// instanciate;
let myName: string = "danzor";
let meaningOfLife: number;
let isLoading: boolean;
let album: any; // any type
// let album: string | number; // union type

// reassign;
myName = "John";
meaningOfLife = 42.9; // floats and integer are number types
isLoading = false;
// album = 9090; // any means any type
album = true; // typeerror

console.log(myName);

// // }}}

const sum = (a: number, b: number) => {
    return a + b
};

let postid: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g; // regex type (select all words)
