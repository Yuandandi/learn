// STRICT INEQUALITY OPERATOR
// the oposite of the strict equlaity operator

function  testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(17)); // equal
console.log(testStrictNotEqual(10)); // not equal
console.log(testStrictNotEqual("17")); // not equal
