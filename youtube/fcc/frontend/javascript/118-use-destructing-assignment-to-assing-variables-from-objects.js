// DESTRUCTURING ASSINGMENT
// assinging values taken directly from an object to a variable;

var voxel = {x: 3.6, y: 7.4, z: 6.4}

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {x : a, y : b, z : c} = voxel;

console.log(x); // 3.6 6.4
console.log(y); // 7.4
console.log(z); // 6.4

// get the temperature
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const { tomorrow: temOfTomorrow } = avgTemperatures;
  return temOfTomorrow;
};

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79
