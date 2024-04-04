// object.freeze
// const declaration doesn't really protect your data from mutation 
// so thera are object.freeze that will prevent data mutation

function freezeObj() {
  "use strict";
  const MATH_CONSTANT = { PI: 3.14 };
  Object.freeze(MATH_CONSTANT); // use this to freeze the value of PI, so You can't reassgn It with try catch block
  
  try {
    math_constant.PI = 99;
  } catch(ex) {
    console.log(ex)
  }
  return MATH_CONSTANT.PI;
}

const PI = freezeObj();

console.log(PI);
