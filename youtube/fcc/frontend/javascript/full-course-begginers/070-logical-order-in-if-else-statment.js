// the order of if statement is so important because It will check for the first condition is met and ignore the rest

function orderMyLogic(val) {
  if (val < 5) { // if this <10 and below <5 It will accept 2 as the less than 10
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(2)); // Less than 5
console.log(orderMyLogic(5)); // Less than 10
console.log(orderMyLogic(9)); // Less than 10
console.log(orderMyLogic(10)); // Greater than or equal to 10
console.log(orderMyLogic(17)); // Greater than or equal to 10

