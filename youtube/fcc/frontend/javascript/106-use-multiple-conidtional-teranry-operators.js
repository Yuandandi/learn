// conditional ternary operator

function checkSign(num) {
  return num > 0 ? "posititve" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10)); // posititve 
console.log(checkSign(-10)); // negative
console.log(checkSign(0)); // zero
