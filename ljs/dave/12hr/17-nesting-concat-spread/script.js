let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "raspberry"];
// // Nesting ; change the original array{{{


// fruits.push(berries); // [ 'apple', 'pear', 'orange', [ 'strawberry', 'blueberry', 'raspberry' ] ] ; array within an array

// x = fruits[3][1]; // blueberry

// const allFruits = [fruits, berries];

// x = allFruits; // [ [ 'apple', 'pear', 'orange', [ 'strawberry', 'blueberry', 'raspberry' ] ], [ 'strawberry', 'blueberry', 'raspberry' ] ]

// // x = allFruits[1][0]; // strawberry

// // x = allFruits[0][3]; // 

// console.log(x);
// // }}}
// {{{ View in Table Form
// ┌─────────┬──────────────┬─────────────┬─────────────┬────────────────────────────────────────────┐
// │ (index) │ 0            │ 1           │ 2           │ 3                                          │
// ├─────────┼──────────────┼─────────────┼─────────────┼────────────────────────────────────────────┤
// │ 0       │ 'apple'      │ 'pear'      │ 'orange'    │ [ 'strawberry', 'blueberry', 'raspberry' ] │
// │ 1       │ 'strawberry' │ 'blueberry' │ 'raspberry' │                                            │
// └─────────┴──────────────┴─────────────┴─────────────┴────────────────────────────────────────────┘

// console.table(x); // more clear way to scope your output
// }}}
// // {{{ Concat Method Did Change the Original Array
// let x;

// const fruits = ["apple", "pear", "orange"];
// const berries = ["strawberry", "blueberry", "raspberry"];

// x = fruits.concat(berries); // [ 'apple', 'pear', 'orange', 'strawberry', 'blueberry', 'raspberry' ]

// console.log(x, fruits, berries);// }}}
// // Spread Operator;{{{
// x = [...fruits, ...berries]; // same as .concat() // [ 'apple', 'pear', 'orange', 'strawberry', 'blueberry', 'raspberry' ]

// x = [...fruits, berries]; // [ 'apple', 'pear', 'orange', [ 'strawberry', 'blueberry', 'raspberry' ] ] ; berries array as the last item in the 'fruits' array

// console.log(x);// }}}
// // Flatten Arrays;{{{
// const arr = [1, 2, [3, 4], 5, [6, 7], 8];

// x = arr.flat(); // [ 1, 2, 3, 4, 5, 6, 7, 8 ] ; flatten array as one dimensional array

// console.log(x);// }}}
// Static Methods on Array Object;

// check whether or not it's an array;
x = Array.isArray(berries); // true
x = Array.isArray("Hello"); // false

x = Array.from("12969834012984sdjf5"); // [ '1', '2', '9', '6', '9', '8', '3', '4', '0', '1', '2', '9', '8', '4', 's', 'd', 'j', 'f', '5' ] ; turn into one dimensional array, hold each string character into an array items

console.log(x);
