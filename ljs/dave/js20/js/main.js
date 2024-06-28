// {{{ console.log() print to the dev tools console
// console.log("Hello world!");
// console.log(typeof "Danzor");
// console.log(typeof 43);
// console.log(typeof true);}}}
// {{{ string method '.' dot notation
const myVariable = "Mathematics";
console.log(myVariable.length); // 11 letters
// }}}
// {{{ string method .length()
console.log("every good boy does fine".length);
// }}}
// {{{ string method 'charAt()'
console.log(myVariable.charAt(0)); // 0 indexed mans the first letter 'M'
console.log(myVariable.charAt(11)) // returns nothing, ends in index 10
// }}}
// {{{ string method 'indexOf()'
console.log(myVariable.indexOf("mat")); // 5, position of the first occurrence within the string
console.log(myVariable.indexOf("Mat")); // 0
console.log(myVariable.indexOf("man")); // -1, if not match
// }}}
// {{{ string method .slice()
console.log(myVariable.slice(4, 8)); // (startIndex, endIndex) returns the characters from the start position to the ending position
console.log(myVariable.slice(5)); // matics, idnex 5 to the end
console.log(myVariable.slice(5, 2)); // won't return anything
// }}}
// {{{ string method .toUpperCase()
console.log(myVariable.toUpperCase()) // MATHEMATICS, uppercase all the string
// }}}
// {{{ string method toLowerCase()
console.log(myVariable.toLowerCase()) // mathematics, uppercase all the string
// }}}
// {{{ string method .includes()
console.log(myVariable.includes("man")) // false, boolean if exist true if not false
console.log(myVariable.includes("mat")) // true
// }}}
// {{{ strin method .split()
console.log(myVariable.split("e")) // ['Math', 'matics'], split the word and exclude the string we given
console.log(myVariable.split("")); // ['M', 'a', 't', 'h', 'e', 'm', 'a', 't', 'i', 'c', 's'] // split each letter
console.log("John,Joe,Dave".split(",")); // ["John", "Joe", "Dave"]
console.log("Every good boy does fine".split(" ")); // ["Every", "good", "boy", "does", "fine"] // split each word
// }}}
