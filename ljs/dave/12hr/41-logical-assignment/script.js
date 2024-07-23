// {{{ ||= assigns the right side value only if the left is a falsy value

let a = false;
// let a = 20; // 20 ; only works in falsy value

// if (!a) {
//     a = 10
// }

// // Same as This
// a = a || 20;

// shorthand;
a ||= 30; // onlu works in falsy value

console.log(a);

//  }}}
// {{{ &&= assigns the right side value only if the left is a truthy value

let b = 20;

// if (b) {
//     b = 30;
// };

// b = b && 40;

b &&= undefined;

console.log(b);

//  }}};
// {{{ ??= Nullish Coalescing Operator ; assigns the right side value only if the left is null or undefined

let c = null; // 20 ; only this
c = undefined; // 20 ; and this will get replaced
// c = ""; // <empty string>
// c = 0; // 0

// if (c === null || c === undefined) {
//     c = 20;
// };

// c = c ?? 20;

c ??= 20;

console.log(c);

//  }}};
