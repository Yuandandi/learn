// SPREAD OPERATOR
// just like rest operator (...) but It expands an already existing array or It
// spreads out an array;
// It takes an array and spreads It out into it's individual parts;
// only can be used in an arguments to a functions or in an array literal;

// const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
// let arr2;
// (function() {
//   arr2 = arr1;
//   arr1[0] = 'potato';
// })();

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
let arr2;
(function() {
  arr2 = [...arr1]; // It will spread out the contents of arr1 into this new array
  arr1[0] = 'potato'
})();

console.log(arr2);

// It clonning all the element of the array 1, but if You change the array 1 It will not change the array 2;
