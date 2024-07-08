// // Ways to Declare a Variable{{{
// // var, let, const

// let firstName = "John";
// let lastName = "Doe";
// console.log(firstName, lastName)
// // console.log(firstName, lastName, age) // initialize error

// let age = 30
// console.log(age);// }}}
// // Naming Conventions{{{
// // - Only letters, numbers, underscore and dollar signs
// // - Can't start with number;

// // let 1name = "foo"; // invalid or unexpected token
// // let name+ = "foo"; // unexpected token
// let name1 = "foo"; // works}}}
// Multi-Word Formattting{{{
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase}}}
// // Re-Assigning Variable{{{
// let age = 30;
// age = 40;
// console.log(age);

// // declare only
// let nama;
// nama = "foo";
// console.log(nama);

// // reassign inside the if statement;
// let score;

// score = 1;

// if(true) {
//     score = score + 1;
// }

// console.log(score);

// // const can't be directly reassigned;
// // const x = 100;
// let x = 100; // let can be reassigned
// x = 200;
// console.log(x);// }}}
// // Arrays Reassignment;{{{
// const arr = [1,2,3,4];
// // arr = [1,2,3,4,5]; // assignment to constant variable

// arr.push(5); // [1,2,3,4,5] ; array methods to add at the end of array items

// console.log(arr);

// const person = {
//     name: "brad",
// };

// person.name = "John" // reassign a value of a key is okay

// person.email = "foo@gmail.com" // add a new key value to the array


// console.table(person);// }}}
// // Declare Multiple Values at Once;{{{
// let a, b, c;

// const d = 10, e = 20, f = 30;

// console.log(d); // 10
// console.log(a); // undefined}}}
