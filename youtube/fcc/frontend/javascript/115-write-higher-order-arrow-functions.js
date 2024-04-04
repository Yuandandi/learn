// DEFAULT PARAMETERS
// create more flexible Function
// kicks in When the argiment is not specified or is undefined

const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();

console.log(increment(5,2)); // 7
console.log(increment(5)); // 6
