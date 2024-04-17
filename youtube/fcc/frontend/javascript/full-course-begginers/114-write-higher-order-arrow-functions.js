// arrow Function work really well with higher order functions such as map, filter and reduce.
// They take functions as of processing collections of
// data whenever one functions takes another functions as an argument

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};

squaredIntegers = squareList(realNumberArray);

console.log(squaredIntegers); // [ 16, 1764, 36 ]


// Number.isInteger() static method determines whether the passed value is an integer

// .filter() method of array instances creates a shallow copy of a potion of
// given array, filtered down o "use strict" the elements from the given array
// that pass the test implemented by the provided function

// map() method of array instances creates a new array populated with the result
// of calling a provided Function n every element in the calling array;
