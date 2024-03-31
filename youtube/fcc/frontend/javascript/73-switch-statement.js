// SWITCH STATEMENT
// test a value and can have many case statements which define varies possible
// values

function caseInSwitch(val) {
  var answer = ""; // if don't meet any condition It will return "" empty string. if It don't specified then It will return the last condition
  switch (val) {
    case 1: // similar like if or elif with strict equality operator
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

console.log(caseInSwitch(1)); // alpha
console.log(caseInSwitch(2)); // beta
console.log(caseInSwitch(3)); // gamma
console.log(caseInSwitch(4)); // delta
