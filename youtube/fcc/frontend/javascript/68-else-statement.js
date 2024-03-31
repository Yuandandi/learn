// function testElse(val) {
//   var result = "";
//   if (val > 5) {
//     result = "Bigger than 5"
//   } 
//   if (val <= 5) {
//     result = "5 or smaller"
//   }
//   return result;
// }

// ELSE STATEMENT
function testElse(val) {
  var result = ""; // placeholder to store the value
  if (val > 5) {
    result = "Bigger than 5"
  } else {
    result = "5 or smaller"
  }
  return result;
}

console.log(testElse(2)); // 5 or smaller
console.log(testElse(5)); // 5 or smaller
console.log(testElse(7)); // Bigger than 5
