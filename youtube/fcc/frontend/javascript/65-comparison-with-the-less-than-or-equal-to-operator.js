function  testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller than or Equal to 12";
  }
  if (val <= 24) {
    return "Smaller than or Equal to 24";
  }
  return "More than 24";
}

console.log(testLessOrEqual(10)); // Smaller than or Equal to 12
console.log(testLessOrEqual(12)); // Smaller than or Equal to 12
console.log(testLessOrEqual(12.1)); // Smaller than or Equal to 24 (argument accept the decimal value)
console.log(testLessOrEqual(13)); // Smaller than or Equal to 24
console.log(testLessOrEqual(24)); // Smaller than or Equal to 24
console.log(testLessOrEqual(27)); // More than 24


