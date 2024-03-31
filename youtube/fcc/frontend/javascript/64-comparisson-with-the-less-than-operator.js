function  testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}

console.log(testLessThan(20)); // Under 25
console.log(testLessThan(25)); // Under 55
console.log(testLessThan(50)); // Under 55
console.log(testLessThan(55)); // 55 or Over
console.log(testLessThan(60)); // 55 or Over

// the order of if statement is important < from lower to higher
