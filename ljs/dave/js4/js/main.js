// {{{ overview
const myNumber = 42; // 42
// const myFloat = 42.00; // 42
const myFloat = 42.01; // 42.01
const myString = "42";
console.log(myNumber);
console.log(myFloat); // number has purpel color in console
console.log(myString); // string has white color in console
console.log(myNumber === myFloat); // false, if we change myNumber to 42.00 will return true
console.log(myNumber === myString); // 42 === "42" false, different data type
console.log(myString + 3) // 423, as a string
// }}}
// {{{ Number() function
console.log(Number(myString)) // 42, string to number
console.log(Number(myString) +  3) // 45
console.log(Number(myString) === myNumber) // true
console.log(Number("Danzor")) // NaN, not a number
console.log(Number(undefined)); // NaN
console.log(Number(false)); // 0
console.log(Number(true)); // 1
// }}}
// {{{ Number methods .isInteger()
console.log(Number.isInteger(myString)); // false, whteher or not it's integer
console.log(Number.isInteger(9.0)); // true, it's float
console.log(Number.isInteger(9.1)); // false
// }}}
// {{{ Number. methods .parseFloat()
const myStringIsFloat = "23.182+UF";
console.log(Number.parseFloat(myStringIsFloat)) // 23.182, only take the number
// }}}
// {{{ Number .toFixed()
console.log(Number.parseFloat(myStringIsFloat).toFixed(2)) // 23,18, take 2 decimals in a string type
// }}}
// {{{ .parseInt() method
console.log(Number.parseInt(myString)); // 42}}}
// {{{ .toString() method
console.log(typeof myFloat.toString()) // will stringify the number, typeof wiil return What type your data is
// }}};
// {{{ typeof
console.log(typeof Number.parseFloat(myString)); // number
// }}}
// {{{ NaN
console.log(Number("Danang")); // NaN
console.log(Number.isNaN()); // false
console.log(Number.isNaN("foo")); // false
console.log(isNaN("foo")); // true}}}
