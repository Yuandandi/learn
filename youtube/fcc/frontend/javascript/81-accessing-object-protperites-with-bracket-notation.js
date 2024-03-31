// BRACKET NOTATION
//
// You can use anytime, but It required if the object has space " " in It

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// both single or double quotes is work
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];

console.log(entreeValue); // hamburger
console.log(drinkValue); // water
