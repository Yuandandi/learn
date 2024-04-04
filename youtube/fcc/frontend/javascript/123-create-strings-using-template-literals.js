// TEMPLATE LITERALS
// special type of string that makes creating complex string easier (`)

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// template literal with multi-line and string interpolation
const greetings = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greetings);

// pros Using `
// You can use multiple line (next line will be the actual next line, no need \n);
// You can use ' or " quotation inside the text (no need use escape character '\');
// you can use vibrate in right in the string starts with $ followed by {},
// anything inside the {} is JavaScript object
