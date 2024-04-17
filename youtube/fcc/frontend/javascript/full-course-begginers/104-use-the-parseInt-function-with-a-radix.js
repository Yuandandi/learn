// radix
// specify tHe base number in tHe string

function convertToInteger(str) {
  return parseInt(str, 2); // specify the base 2 for binary number
}

console.log(convertToInteger("10011")); // binary number Using base 2 convert this binary into a number 19

// 2 - The number will show as a binary value
// 8 - The number will show as an octal value
// 16 - The number will show as an hexadecimal value
