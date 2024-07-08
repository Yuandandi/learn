// Type Conversion
// convert string to number{{{
// // parseInt() method ; string to number{{{
// amount = parseInt(amount);
// console.log(amount, typeof amount); // 100 number}}}
// // unary operator;{{{
// amount = "100";
// amount = +amount;
// console.log(amount, typeof amount);// }}}
// // Number() method;{{{
// let amount = "100";// 
// amount = Number(amount);
// console.log(amount, typeof amount); // 100 number}}}}}}
// // convert number to string{{{
// let amount = 100;

// // amount = amount.toString(); // It creates a temporary wrapper of the appropriate Object type
// // amount = String(amount); // string constructor
// console.log(amount, typeof amount); // 100 string}}}
// // convert string to decimal{{{
// let amount = "99.4";
// amount = parseFloat(amount);
// amount = parseInt(amount); // 99 number
// console.log(amount, typeof amount); // 99.4 number}}}
// // convert number to boolean;{{{
// let amount = 1; // 0 ; false
// amount = Boolean(amount);
// console.log(amount, typeof amount); // true boolean}}}
// // NaN with type of number{{{
// let amount = "Hello";

// amount = parseInt(amount);
// console.log(amount, typeof amount); // NaN number
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log("foo" / 32);// }}}
