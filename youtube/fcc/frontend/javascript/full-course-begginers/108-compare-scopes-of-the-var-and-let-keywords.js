// var is declared globally or locally if declared inside a Function
// let is limited to the block statemetn or expression that It was declared in

function checkScope() {
  "use strict";
  let i = "function scope"; // if we comment this
  if (true) {
    let i = "block scope"; // and we change let to var the "i" bellow still be executed as "block scope", if set to let "Function scope" error
    console.log("Block scope i is:", i);
  }
  console.log("Function scope i is:", i);
  return i;
}

checkScope();

// Block scope i is: block scope
// Function scope i is: function scope

// this is why people choose let rather than var because It make sure It will only run in the specific block scope rather than var that can affect into locally or globally
