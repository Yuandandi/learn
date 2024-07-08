// Array Methods

let x;

const array = [32, 234, 45, 23, 91]; // [ 32, 234, 45, 23, 91 ]

// // Array Is Not Changing{{{
// array.push(100); // [ 32, 234, 45, 23, 91, 100 ] ; add to the end item

// array.pop(); // [ 32, 234, 45, 23, 91 ] ; remove the last item

// array.unshift(99); // [ 99, 32, 234, 45, 23, 91 ] ; add in the beginning of the array

// array.shift(); // [ 32, 234, 45, 23, 91 ]; take of the beginning

// array.reverse(); // [ 91, 23, 45, 234, 32 ] ; reverse the array position}}}

x = array.includes(23); // true
x = array.includes(123); // false

x = array.indexOf(340); // -1 ; if it's not in the array
x = array.indexOf(32); // 0 ; if it's in the array

console.log(x);
