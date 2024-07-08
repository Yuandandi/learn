let x;

const name = "John";
const age = 30;

x = "Hello my name is " + name + " and I am " + age + " years old"; // Hello my name is John and I am 30 years old

// {{{ Template Literals or Template Strings
// introduced in es2015;
x = `Hello my name is ${name} and I am ${age} years old`; // Hello my name is John and I am 30 years old
// }}}
// String Properties and Methods{{{
const s = "Hello world";
x = s.length; // 11
// }}}
// access value by key{{{
x = s[0]; // H
x = s[1]; // e
x = s[2]; // l
x = s[3]; // l
x = s[4]; // o
x = s[5]; // 
x = s[6]; // w
x = s[7]; // o
x = s[8]; // r
x = s[9]; // l
x = s[10]; // d}}}

// Prototype

x = s.__proto__; // list of available methods from the current type

x = s.toUpperCase(); // HELLO WORLD
x = s.toLowerCase(); // hello world

x = s.charAt(0); // H ; same like indexing []

x = s.indexOf("l"); // 2 ; the first occurrence

x = s.substring(0, 4); // Hell
x = s.substring(4, 8); // o wo
x = s.substring(7); // orld ; index 7 to the end

// slice can do - negative
x = s.slice(0, 5); // Hello
x = s.slice(-1); // d
x = s.slice(-11); // Hello world
x = s.slice(-11, -6); // Hello

x = "               Hello    world!         " //            Hello world! ; there's some whitespace
// x = x.trim(); // Hello world! ; get rid of the unnecessary space before the first letter, didn't work in the middle of the word

x = s.replace("Hello", "halo") // halo world

x = s.includes("Hell") // true

x = s.valueOf(); // Hello world

x = s.split(); // [ 'Hello world' ]
x = s.split(' '); // [ 'Hello', 'world' ] ; space separator
x = s.split(""); // [ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ] ; print each letter includes whitespace

console.log(x); 
