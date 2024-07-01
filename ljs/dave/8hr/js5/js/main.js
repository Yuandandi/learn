// {{{ Math method
console.log(Math.PI) // 3.141592653589793, pi decimal number
console.log(Math.trunc(Math.PI)); // 3, truncated remove all the decimals
console.log(Math.round(3.5)); // 4
console.log(Math.ceil(Math.PI)); // 4, always rounds up the decimal
console.log(Math.floor(Math.PI)); // 3, always rounds down the decimal;
console.log(Math.pow(2, 4)); // 16, 2⁴
console.log(Math.min(2, 0.5, 6)); // 0.5, the lowest number 
console.log(Math.max(2, 4, 6)); // 6, the lowest number 
console.log(Math.random()); // decimal number between 0 and 1, and never be both of them
// }}}
// {{{ random number combos
console.log(Math.floor(Math.random() * 10) + 1); // random number from 1 to 10
// console.log(Math.ceil(Math.random() * 10 ) + 1);
// if we use Math.ceil() there are potential we get the number 0
// }}}
