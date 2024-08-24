// THIS KEYWORD

// 3 ways to call the function

// {{{ Before This Keyword

// // {{{ function declaration

// function hello() {
//   console.log("Hello!")
// }

// hello();

// // }}}
// // {{{ Object literal

// var obj = {  };
// obj.halo = function () {
//   console.log("Haloo")
// }

// obj.halo();

// // }}}
// // {{{ Constructor

// function Hallo() {
//   console.log("Hallo!!");
// }

// new Hallo();
// // almost the same as function declaration only They has a "new" keyword

// // }}}

// }}}
// {{{ This and Window Keyword Are the Same in the Global Scope

// console.log(this); // in node It will return {}
// console.log(this); // in browser It will return 'window Object' global Object

// console.log(window === this); // true

// let a = 10;
// console.log(this.a); both are the same
// console.log(window.a);
// console.log(a);
// meaning What ever you declare to the global will store to 'window Object' and can be accessed with 'this keyword too'

// }}}
// {{{ After This Keyword

// // {{{ Function Declaration

// function hello() {
//   console.log(this); // window Object
//   console.log("Hello!");
// }

// this.hello();
// // return global Object

// // }}}
// // {{{ Object literal

// var data = {a : 10, name: "Danzor"};
// data.halo = function () {
//   console.log(this); // that Object 
//   console.log("Haloo")
// }

// data.halo();
// // return objek yang bersangkutan

// // }}}
// {{{ Constructor

function Hallo() {
  console.log(this); 
  console.log("Hallo!!");
}

let obj1 = new Hallo(); // refer to obj1
let obj2 = new Hallo(); // refer to obj2
// this nya mengembalikan Object yang baru dibuat

// }}}

// }}}
