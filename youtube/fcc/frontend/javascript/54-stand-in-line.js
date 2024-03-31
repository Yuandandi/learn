function  nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); // JSON.stringify() change an array into a string
console.log(nextInLine(testArr, 0));
console.log("After: " + JSON.stringify(testArr));
