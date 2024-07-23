// // {{{ For of Loop Array

// // newer way to loop through iterable Object like arrays or any string

// const items = ["book", "table", "chair", "kite"];

// // for (let i = 0; i < items.length; i++) { // traditional for loop syntax
// for (const item of items) { // cleaner and modern way
//     console.log(item);
// };

// //  }}}
// // {{{ For of Loop Object

// const users = [
//     { name: "Brad"},
//     { name: "Kate"},
//     { name: "Steve"},
// ];

// for (const user of users) {
//     // console.log(user) // { name: 'Brad' } { name: 'Kate' } { name: 'Steve' }
//     console.log(user.name); // Brad Kate Steve
// }

// //  }}};
// // {{{ Loop Over String

// const str = "Hello world";

// for (const letter of str) {
//     console.log(letter) // H e l l o w o r l d ; print each letter
// }

// //  }}};
// // {{{ Loop Over Maps

// const map = new Map();

// // set key value pair;
// map.set("name", "john");
// map.set("age", 30);

// for (const [key, value] of map) {
//     console.log(key, value);
// };

// //  }}}
