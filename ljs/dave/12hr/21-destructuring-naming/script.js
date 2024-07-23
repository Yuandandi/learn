// // dry (don't repeat yourself){{{
// const firstName = "John";
// const lastName = "Doe";
// const age = 30;

// const person = {
//     // firstName: firstName,
//     // lastName: lastName,
//     // age: age,

//     // do this instead;
//     firstName,
//     lastName,
//     age,
// };

// console.log(person.age);// }}}
// // Destructuring;{{{

// const todo = {
//     id: 1,
//     title: "Take out trash",
//     user: {
//         name: "John",
//     },
// };

// // const id = todo.id; // 1

// // const { id, title } = todo; // 1 Take out trash ;do this way instead, pulling the variable out

// // const { id, title, user } = todo; // 1 Take out trash { name: 'John' }

// // const { id, title, user: { name } } = todo; 

// // console.log(id, title, name);

// const { id: todoId, title, user: { name } } = todo;  // 1

// console.log(todoId);
// // }}}
// destructuring arrays;{{{
const numbers = [23, 67, 24, 63, 52];

// const [a, b] = numbers; // 23 67

const [a, b, ...rest] = numbers; // 23 67 [ 24, 63 ]

console.log(a, b, rest);// }}}
