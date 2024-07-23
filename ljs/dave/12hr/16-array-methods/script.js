// Array Methods

let x;

const array = [32, 234, 45, 23, 91]; // [ 32, 234, 45, 23, 91 ]

// // Array Is Not Changing{{{
// array.push(100); // [ 32, 234, 45, 23, 91, 100 ] ; add to the end item

// array.pop(); // [ 32, 234, 45, 23, 91 ] ; remove the last item

// array.unshift(99); // [ 99, 32, 234, 45, 23, 91 ] ; add in the beginning of the array

// array.shift(); // [ 32, 234, 45, 23, 91 ]; take of the beginning

// array.reverse(); // [ 91, 23, 45, 234, 32 ] ; reverse the array position
// Not Changing the Original Array;
x = array.includes(23); // true
x = array.includes(123); // false

x = array.indexOf(340); // -1 ; if it's not in the array
x = array.indexOf(32); // 0 ; if it's in the array

// Slice Didn't Change the Array;
x = array.slice(1); // [ 234, 45, 23, 91 ]
x = array.slice(1, 3); // [ 234, 45 ] ; includes index 1 exclude index 3
// x, array [ 234, 45 ] [ 32, 234, 45, 23, 91 ]}}}
// Change the Original Array;{{{
// x = array.splice(1,4); // [ 234, 45, 23, 91 ] [ 32 ] ; x = index 1 until index 4 ; array = the original array only left index 0

// x = array.splice(3, 1); // [ 23 ] [ 32, 234, 45, 91 ] ; take the index 3 and remove from the original array
// console.log(x);
// console.log(x, array);
// }}}
// chain method;
x = array.splice(1, 4).reverse().toString().charAt(0); // 9 ; splice take the index 1 include index 4, reversed, make into string, character index 0, charAt() can only be applied in string form
console.log(x);
