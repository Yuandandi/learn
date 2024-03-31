// check 2 things are true at the same time 

// NESTED IF REDUNDANT
// function testLogicalAnd(val) {
//   if (val <= 50) {
//     if (val >=  25) {
//       return "Yes";
//     }
//   }
//   return "No";
// }

// USE AND OPERATOR INSTEAD
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return"Yes";
  }
  return "No";
}

console.log(testLogicalAnd(20));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(60));
