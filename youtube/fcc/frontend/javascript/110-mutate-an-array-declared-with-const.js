// while You can't reassign a variable declare with const You can mutate an array

// YOU CAN'T REASSIGN THE VALUE OF AN ARRAY DIRECTLY;
// const s = [5,7,2];
// function editInPlace() {
//   "use strict";
//   s = [2,5,7];  // error type assignment to constant variable
// };

// BUT YOU CAN REASSIGN IT WITH BRACKET NOTATION;
const s = [5,7,2];
function editInPlace() {
  "use strict";
  s[0] = 2 ;
  s[1] = 5 ;
  s[2] = 7 ;
}

editInPlace();
console.log(s); // [ 2, 5, 7 ]
