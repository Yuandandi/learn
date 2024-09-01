// {{{ Array Manipulation Traditional Way

// Array Manipulation{{{
let arr = ["a", 1, true];
// console.log(arr); // [ 'a', 1, true ]
// console.log(arr[2]); // true}}}
// Add New Value to an Array (Tradisional, Not Good Practice){{{
let array = [];

array[0] = "joko";
array[1] = "cinta";
array[2] = "galih";
array[4] = "fulan"; // missing index 3

// console.log(array); // [ 'joko', 'cinta', 'galih' ]
// console.log(array) // [ 'joko', 'cinta', 'galih', <1 empty item>, 'fulan' ]
// in node if an index has no value, It will replaced by '<empty item>';
// in browse It will showed "undefined x 1";}}}
// {{{ Remove Value From an Array

let nama = ["joko", "cinta", "galih"]
nama[1] = undefined;
// console.log(nama); // [ 'joko', undefined, 'galih' ]

// }}};
// // {{{ Show an Array Item With Looping

// let teman = ["joko", "cinta", "galih"];

// for (let i = 0; i < teman.length; i++) { // .length method will return the number of item in array in this case 3
//     console.log(`Teman ke - ${i + 1} ${teman[i]}`);
// }
// // Teman ke - 1 joko
// // Teman ke - 2 cinta
// // Teman ke - 3 galih

// // }}};

// }}}
// {{{ Array Manipulation With Builtin Javascript Method

let kawan = ["sandika", "sumanto", "jaka"];

// {{{ .join() method

// console.log(kawan.join()); // sandika,sumanto,jaka ; default separator is ','
// console.log(kawan.join(" - ")); // sandika - sumanto - jaka ; custom separator passing as an Argument inside ""

// }}};
// // {{{ .push() method

// kawan.push("cindy", "reyman"); // new item will be pushed (added to the last item of the array)
// console.log(kawan.join(" - "));  // sandika - sumanto - jaka - cindy - reyman

// // }}};
// // {{{ .pop() method

// kawan.pop(); // remov the last time of the array
// console.log(kawan.join(" - ")); // sandika - sumanto

// // }}};
// // {{{ .unshift() method

// kawan.unshift("bambang", "wawan"); // bambang and wawan will be added in the first item
// console.log(kawan.join(" - ")); // bambang - wawan - sandika - sumanto - jaka

// // }}};
// {{{ .shift() method

kawan.shift(); // first item "sandika" will be removed, doesn't need an Argument
console.log(kawan.join(" - ")); // sumanto - jaka

// }}};

// .shift() and .pop() will truly removed your list, not like above we change into undefined;

// }}}
