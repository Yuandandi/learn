// // Truthy Value{{{

// - everything else is not falsy
// - true
// - "0" (0 in a string)
// - " " (space in string)
// - "false" (false in a string)
// - [] (empty array)
// - {} (empty Object)
// - function () {} (empty function);

// const email = "test@test.com" // string with anything in It is a truthy value

// if (email) { // evaluated to true ; When you pass something into an if statement it's always going to be coerced into boolean
//     console.log("You passed in an email");
// };

// console.log(Boolean(email)); // true
// // }}}

// {{{ Falsy Values

// - false
// - 0
// - "" or '' (empty string)
// - null
// - undefined
// - NaN

// falsy;
let x = false;
x = null;
x = "";
x = undefined;
x = NaN;

// truthy;
x = [];
x = {};
x = " ";
x = "0";
x = "false";
x = function () { };

if (x) {
    console.log("This is truthy");
} else {
    console.log("This is falsy") // This is falsy
};

// console.log(Boolean(x)); // false

//  }}};

// {{{ Truthy and Falsy Caveats

// before;
// const children = 0; // Please enter number of children, because 0 is evaluated to falsy
// const children = 1;

// after
const children = 0;

// if (children) { // don't  do this
// if (children !== undefined) { // do this
if (!isNaN(children)) { // or this
    console.log(`You have ${children} children`); // You have 0 children
} else {
    console.log(`Please enter number of children`)
};

// {{{ another caveat ; checking for empty arrays

const posts = ["post one", "post two"]; // list post, try to remove the list and now you got "No post to list"
// const posts = []; // this is still truthy which can lead to list post

console.log(posts.length);

// if (posts) { // don t do this
if (posts.length > 0) {
    console.log("List Post");
} else {
    console.log("No Post to List")
};

//  }}};

// {{{ checking for empty Object

// const user = {
//     name: "brad",
// };

const user = {}; // this is truthy value

// if (user) {
// if (user.length > 0) { // do this 
if (Object.keys(user).length > 0) { // or this to be perfect
    console.log("List user");
} else {
    console.log("No user")
};

//  }}};

// {{{ Loose Equality

// better to always use ===
console.log(false == 0); // true
console.log(false === 0); // false

console.log("" == 0); // true
console.log(null == undefined); // true

//  }}};

//  }}};
