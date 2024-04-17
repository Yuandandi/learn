// function testLogicalOr(val) {
//   if (val < 10) {
//     return "outside";
//   }
//   if (val > 20) {
//     return "outside";
//   }
//   return "inside";
// }

// LOGICAL OR OPERATOR
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

console.log(testLogicalOr(9)); // outside
console.log(testLogicalOr(10)); // inside
console.log(testLogicalOr(19)); // inside
console.log(testLogicalOr(22)); // outside
