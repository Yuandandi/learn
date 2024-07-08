// // Array Literal{{{
const numbers = [12, 45, 229, 39]; // [ 12, 45, 229, 39 ]
// console.log(numbers); // }}}
// // Array Constructor{{{
const fruits = new Array("apple", "grape", "orange"); // [ 'apple', 'grape', 'orange' ]
// console.log(fruits);// }}}
// // {{{ Array Properties and Indexing
// let x;

// x = numbers[0] + numbers[3]; // 51

// x = `my favorite frueit is an ${fruits[2]}` // my favorite fruit is an orange

// x = numbers.length; // 4


// console.log(x);// }}}
// reassignment;{{{

fruits[2] = "pear"; // [ 'apple', 'grape', 'pear' ]

// add to the end of array
// because array is 0 indexing and length start from number 1;
fruits[fruits.length] = "blueberry"; // [ 'apple', 'grape', 'pear', 'blueberry' ] 
fruits[fruits.length] = "peach";  // [ 'apple', 'grape', 'pear', 'blueberry', 'peach' ]

console.log(fruits);// }}}
