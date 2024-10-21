let friends = ["sandika", "bambang", "galih", "susanto", "rendy"]

// .splice() method{{{
// syntax
// arr.splice( first index you want to insert, number of the array you want to remove, your item insertion )

friends.splice(1, 0, "wendy", "nanang");
console.log(friends.join(" - ")); // sandika - wendy - nanang - bambang - galih - susanto - rendy
// }}}

// // {{{ .slice() method;

// // syntax .slice(firstIndex, lastIndex - 1);

// let slice = friends.slice(1, 4);
// console.log(slice.join(" - ")); // bambang - galih - susanto

// // }}};
