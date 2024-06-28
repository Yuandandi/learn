// {{{ Arrays
const myArray = [];

// add elements to an array;
myArray[0] = "dave"
myArray[1] = 1001;
myArray[2] = false; 

// check the position of the array
console.log(myArray[2]);

// refer to an array;
console.log(myArray); // ["dave", "1001 ,false"]

// length property;
console.log(myArray.length); // 3

// last element in an array;
console.log(myArray[myArray.length - 1]); // length is 3, last element is index 2, so we minus 1

// .push() method;
myArray.push("school") // ["dave", "1001 ,false", "school"]
console.log(myArray); // add a new item to the last of an array

myArray.pop(); // ["dave", "1001 ,false"]
console.log(myArray); // remove the last item of the array

// last item;
const lastItem = myArray.pop(); // false
console.log(lastItem); // the last item is "false" after we pop() the 'school'

console.log(myArray)

// add new item in the first array;
myArray.unshift(43); // if we store this into a variable the console will return 3, which the new length of the array
console.log(myArray); // [43, 'dave', 1001]

// remoe the first item of the array;
const firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);

// delete keyword;
delete myArray[1]; // ["dave", empty] // change the array number 1 (1001) into "empty"
console.log(myArray);

const array = [];
// }}}
// {{{ .splice() ; put or new value or remove at certain index given
array[0] = "dinda";
array[1] = 69;
array[2] = false;

console.log(array);

array.splice(1, 0, 42);
console.log(array); // ["dinda", false ]}}}
// {{{ .slice() method, get the middle item between 2 Item given, if only one get from that index to the end of an array
const alphabet = ["A", "B", "C", "D", "E", "F"]
// const newAlphabet = alphabet.slice(2); //  ["C", "D", "E", "F"], start from index 2 to the end
// const newAlphabet = alphabet.slice(2,5); // ["C", "D", "E"], start form index 2 exclude index 5
// console.log(newAlphabet);
// }}} .reverse() method, reverset the index of the mite
// {{{ .reverse() method, reverse all the item order
// alphabet.reverse()
// console.log(alphabet);
// }}}
// {{{  .join() method join all the item with ',' separated
const newAlphabet = alphabet.join()
console.log(newAlphabet); // A,B,C,D,E,F }}}
// {{{ .split(), turn comma separated into an array
const splitArray = newAlphabet.split(","); // after we .join(), we can do .split() to make It to an array just like before
console.log(splitArray);
// }}}
// {{{ .concat() ; joins 2 array
const a = ["A", "B", "C"];
const b = ["D", "E", "F"];

// if we change b.concat(a); // the opposite array will return
const newArray = a.concat(b); // ["A", "B", "C", "D", "E", "F"]
console.log(newArray);// }}}
// {{{ ... spread operator to ge tthe same result as .concat()
const arrayBaru = [...a, ...b];
console.log(arrayBaru); // ["A", "B", "C", "D", "E", "F"]
console.log([a, b]); // nested array with the lengt of 3 twice
// }}}
// {{{ single dimension array
const equipShelfA = ["baseball", "football", "voleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothessShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothessShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]); // football
console.log(clothessShelfB[2]); // hoodies
// }}}
// {{{ two dimensional array
const equipDept = [equipShelfA, equipShelfB]
const clothesDept = [clothessShelfA, clothessShelfB]

console.log(equipDept);
console.log(clothesDept);

// accessing two dimensional items ; [][], [array index][item index]
console.log(equipDept[0][1]); // football
console.log(equipDept[1][2]); // tennis balls
// }}}
// {{{ three dimensional array
const sportStore = [equipDept, clothesDept];
console.log(sportStore);
console.log(sportStore[0][0][1]); // football
console.log(sportStore[0][1][2]); // tennis balls
// }}}
