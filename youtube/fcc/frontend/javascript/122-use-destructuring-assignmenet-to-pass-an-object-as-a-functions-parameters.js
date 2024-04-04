const stats = {
  max: 56.78,
  standard_deviation: 4.43,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
}

// const half = (function() {
//   return function half(stats) {
//     return (stats.max + stats.min) / 2.0;
//   };
// })();

const half = (function() {
  return function half({max, min}) { // same applied as above. we just passing only What we need (When stats passed in It will destructured into just the max and min variables)
    return (max + min) / 2.0; // common used in API calls
  };
}());

console.log(stats);
console.log(half(stats));
