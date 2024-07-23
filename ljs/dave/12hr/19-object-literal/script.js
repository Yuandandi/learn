// // Object Literal{{{
// // a common data structure holds key/value pairs;

// let x;

// const person = {
//     name: "john doe",
//     age: 30,
//     isAdmin: true,
//     address: {
//         street: "123 Main st",
//         city: "boston",
//         state: "MA",
//     },
//     hobbies: ["music", "sports"],
// };

// // accessing the Object literal;

// x = person; // { name: 'john doe', age: 30, isAdmin: true }
// x = person.name; // john doe ; Using dot notation x = person['age']; // 30 ; Using bracket notation
// x = person.address['state']; // combine both dot notation and bracket notation // MA
// x = person.hobbies[0]; // music

// person.hasChildren = true;

// person.greet = function () {
//     console.log(`Hello my name is ${this.name}`); // Using "this" keyword It revers to person array
// };

// person.greet(); // Hello my name is john doe

// console.log(x);
// // }}}
// Key Naming Convention;
const person2 = {
    "first name": "Brad",
    "last name": "Traversy",

    // better to write this format;
    // firstName: "Brad",
    // first_name: "brad",
};

// console.log(person2.first name); // you can't access dot notation with space
console.log(person2["first name"]); // Brad
