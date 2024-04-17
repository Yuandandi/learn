// switch statement whrer multiple inputs give the same outputs

function sequentialSizes(val) {
  var answers = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answers = "low"
      break ;
    case 4:
    case 5:
    case 6:
      answers = "medium"
      break ;
    case 7:
    case 8:
    case 9:
      answers = "high"
      break ;
  }
  return answers;
}

console.log(sequentialSizes(1)); // low
console.log(sequentialSizes(2)); // low
console.log(sequentialSizes(3)); // low
console.log(sequentialSizes(4)); // medium
console.log(sequentialSizes(5)); // medium
console.log(sequentialSizes(6)); // medium
console.log(sequentialSizes(7)); // high
console.log(sequentialSizes(8)); // high
console.log(sequentialSizes(9)); // high
