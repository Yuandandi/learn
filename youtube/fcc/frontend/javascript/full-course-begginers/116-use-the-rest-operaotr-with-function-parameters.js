// REST OPERATOR
// allow You to create a Function that takes a variable number of arguments;
// the rest operator is three dots;

const sum = (function() {
  // return function sum(x, y, z) {
  // const args = [x, y, z];;
  return function sum(...args) { // same like above
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1,2,3,4));
console.log(sum(1,2,3));

// ...args ; It will convert everything that's passed in into one array and the array is called args

// not like before we can only take 3 number as an argument
// now we can have any number of arguments;
