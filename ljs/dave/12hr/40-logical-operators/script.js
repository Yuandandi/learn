// {{{  && || Logical Operator

console.log(10 > 20 && 30 > 15); // false ; false && true ; and operator ; if one of em is false then false
console.log(10 > 20 || 30 > 15); // true ; false || true ; or operator ; if one of em is true than true

//  }}}
// {{{ && - Will Return First Falsy Value or the Last Value

let a;

a = 10 && 20; // 20 ; nothing is falsy the the last will return
a = 10 && 20 && 30; // 30 ; same
a = 10 && 0 && 30; // 0 ; because 0 is falsy
a = 10 && [] && 30; // 30
a = 10 && '' && 30;; // <empty string>

console.log(a);

// // usecase
// // if there's a post is fine;
// const posts = ["post one", "post two"];
// console.log(posts[0]);

// What if there is on Post;
const posts = [];
// console.log(posts[0]); // undefined ; [] is truthy value
posts.length > 0 && console.log(posts[0]); // <empty string> ; you need to do this

//  }}};
// {{{ || - will return the first truthy value or the last value;

let b;

b = 10 || 20; // 10 ; both are truthy and return the first one
b = 0 || 20; // 20 ; 0 falsy, 20 truthy ; return the first truthy
b = 0 || null || "" || '' || undefined; // undefined ; nothing is truthy so return the last

console.log(b);

//  }}};
// {{{ ?? - return the right side operand When the left is either null or undefined

let c;

c = 10 ?? 20; // 10
c = null ?? 20; // 20
c = undefined ?? 20; // 20
c = "" ?? 20; // <empty string>
c = 0 ?? 20; // 0

console.log(c);

//  }}};
