// this is called global variable
let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function lapsNumber() {
  // let totalLaps = lap1 + lap2 + lap3; // local variable(inside Function)
  // console.log(totalLaps);
  console.log(lap1 + lap2 + lap3) // alternatively
};

lapsNumber();

// You can access global variable inside a Function body, but You can't access local variable in global scope;
// console.log(totalLaps); // totalLaps is not define
