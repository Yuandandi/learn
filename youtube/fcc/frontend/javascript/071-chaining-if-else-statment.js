function chainingIf(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else { // no need to put any other condition because It could be any number of the rest
    return "Huge";
  }
}

console.log(chainingIf(4)); // Tiny
console.log(chainingIf(7)); // Small
console.log(chainingIf(14)); // Medium
console.log(chainingIf(15)); // Large
console.log(chainingIf(18)); // Large
console.log(chainingIf(20)); // Huge

