// use destructuring assignment to assign variable from array

const [z,x, ,y] = [1,2,3,4,5,6]; // 1,2,4 (skip one number)
// const [z,x, , ,y] = [1,2,3,4,5,6]; // 1,2,5 (skip two number)
console.log(z, x, y);


let a = 8, b = 6;
(() => {
  "use strict";
  [a,b] = [b,a];
})();

console.log(a);
console.log(b);
