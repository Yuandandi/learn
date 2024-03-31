// STRICT EQUALITY OPERATOR
// 3 == 3 true
// 3 == '3' true It converts string to number automatically
// 3 === 3 true
// 3 === '3' false

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(7));
console.log(testStrict('7'));
console.log(testStrict(9));
