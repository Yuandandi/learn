// trick when you want a function to return to a boolean, a true or false value

// function isLess(a, b) {
//   if (a < b) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isLess(a, b) {
  return a < b;
}

console.log(isLess(3, 4));
console.log(isLess(4, 3));
