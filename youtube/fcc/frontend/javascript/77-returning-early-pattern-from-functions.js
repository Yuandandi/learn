function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  // round the number, power up (pangkat), square root (akar)
  return Math.round(Math.pow(Math.sqrt(b), 2));
}

console.log(abTest(2, 2));
console.log(abTest(-2, 2));
