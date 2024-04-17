
// const bicycle = {
//   gear: 2,
//   setGear: function(newGear) { // use Function keyword and the colon
//     "use strict";
//     this.gear = newGear
//   }
// };

// object that contain a Function
const bicycle = {
  gear: 2,
  setGear(newGear) { // simple version
    "use strict";
    this.gear = newGear; // this. keyword
  }
}

bicycle.setGear(3);
console.log(bicycle.gear);

// the 'this' keyword refers to the context where a place of code, such as functions body, is supposed to run
