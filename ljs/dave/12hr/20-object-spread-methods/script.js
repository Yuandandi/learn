// // {{{ Object literals
// let x;

// const todo = {};

// todo.id = 1;

// x = todo; // { id: 1 }

// x = Object.keys(todo);

// console.log(x);// }}}
// Object Constructor{{{
let x;

const todo = new Object();

todo.id = 1; // { id: 1 }
todo.name = "Buy Milk"; // { id: 1, name: 'Buy Milk' }
todo.completed = false;

// Object Methods;{{{
x = Object.keys(todo); // [ 'id', 'name', 'completed' ] ; took the keys from 'todo' Object and put into an array

// x = todo.length; // you Cant just accessing this way
x = Object.keys(todo).length; // 3

x = Object.values(todo); // [ 1, 'Buy Milk', false ] ; value only

x = Object.entries(todo); // [ [ 'id', 1 ], [ 'name', 'Buy Milk' ], [ 'completed', false ] ] ; key value pair in each array
// }}}
// check weeder or not having the property name{{{
x = todo.hasOwnProperty("name"); // true 
x = todo.hasOwnProperty("age"); // false
// }}}
// }}}
// const person = {// {{{
//     address: {
//         coords: {
//             lat: 42.141245,
//             lng: -71.3423
//         }
//     }
// }

// x = person.address.coords.lat; // 42.141245
// // }}}
// // {{{ Spread Operator
// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4};

// x = {obj1, obj2}; // { obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }

// x = {...obj2, ...obj1}; // { c: 3, d: 4, a: 1, b: 2 }

// x = {...obj1, ...obj2}; // { a: 1, b: 2, c: 3, d: 4 } ; spread combine both array, we took them and spread them across

// x = {...obj1, obj2}; // { a: 1, b: 2, obj2: { c: 3, d: 4 } }}}}
// // Object Assigned;{{{
// x = Object.assign({}); // {}
// // }}}
// // Accessig Object{{{
// const todos = [
//     { id: 1, name: "Buy milk"},
//     { id: 2, name: "Pickup kids from school"},
//     { id: 3, name: "Take out trash"},
// ];

// x = todos; // [ { id: 1, name: 'Buy milk' }, { id: 2, name: 'Pickup kids from school' }, { id: 3, name: 'Take out trash' } ]
// x = todos[0]; // { id: 1, name: 'Buy milk' }
// x = todos[0].name; // Buy milk
// // }}}

console.log(x); 
