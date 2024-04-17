// pass arguments to arrow Function

// var myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// }
//
// concat() method of array instanes is used to merge two or more arrays. this
// method does not change the existing arrays, but instead returns a new array

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));
