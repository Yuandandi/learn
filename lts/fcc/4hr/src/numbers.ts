// in ts we only hold "number" we don't have (float, integers)

// number method;
let userId: number = 4403.2
// console.log(userId.toExponential());
// console.log(userId.toFixed());
// console.log(userId.toLocaleString());
// console.log(userId.toPrecision());
// console.log(userId.toString());
// console.log(userId.valueOf());

// boolean method;
let isLoggedIn: boolean = false;
// console.log(isLoggedIn.valueOf());

// better code;
let randNum = 3822.3;
randNum.toFixed();
console.log(randNum);
