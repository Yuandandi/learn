function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or over";
  }
  if (val >= 10) {
    return "10 or over";
  }
  return "Less than 10";
}

console.log(testGreaterOrEqual(7)); // Less than 10
console.log(testGreaterOrEqual(15)); // 10 or over
console.log(testGreaterOrEqual(20)); // 20 or over
console.log(testGreaterOrEqual(35)); // 20 or over

// the order of iff statement is important start from higher to lower value
