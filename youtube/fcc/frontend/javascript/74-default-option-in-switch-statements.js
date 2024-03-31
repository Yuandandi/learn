// SWITCH STATEMENT
// test a value and can have many case statements which define varies possible
// values

function caseInSwitch(val) {
  var answer = ""; 
  switch (val) {
    case 1: 
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
    default: // same like else statement
      answer = "Not match any radiation number"
  }
  return answer;
}

console.log(caseInSwitch(8)); // else statement for switch condition
