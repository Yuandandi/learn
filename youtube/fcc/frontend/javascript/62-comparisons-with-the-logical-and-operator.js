function  testGreaterThan(val) {
  if (val > 100) {
    return "more than 100";
  }
  if (val > 10) {
    return "more than 10";
  }
  return "10 or under";
}

console.log(testGreaterThan(8)); // 10 or under
console.log(testGreaterThan(10)); // 10 or under
console.log(testGreaterThan(40)); // more than 10
console.log(testGreaterThan(140)); // more than 100

