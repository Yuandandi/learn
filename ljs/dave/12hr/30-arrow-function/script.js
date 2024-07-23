// // {{{ Normal Function

// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2)); // 3

// //  }}}
// {{{ Arrow Function Syntax

// store inside a variable remove the function keyword and Using fat arrow => 
const add = (a, b) => {
    return a + b;
};

// Implicit Return ; if you want only return you can use this format;
const subtract = (a, b) => a - b;

// Single parameter don't need () around It;
const double = a => a * 2;

// Returning an Object;
const createObject = () => ({
    name: "Brad"
});

// For Loop;
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
    console.log(n); // 1-5 loops through
});

// Arrow Function in a Callback ; for loop with arrow function if only console a single thing;
numbers.forEach(n => console.log(n));

console.log(add(1, 2)); // 3
console.log(subtract(10, 5)); // 5
console.log(double(9));
console.log(createObject());

//  }}}
