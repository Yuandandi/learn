// import modules

// // basic importing;
// import playGuitar from "./guitar.js"

// // import multiple module;
// import { shredding, plucking } from "./guitar.js";
// you can shorten the module name with "as" or avoid to have the same module name with your team;

// // "as" shorten key;
// import { shredding as shred, plucking as pluck } from "./guitar.js";
// Using import *;
import User from "./user.js";
import * as Guitars from "./guitar.js";
// now we able to use the module

// // use basic import;
// console.log(playGuitar());
// console.log(shredding());
// console.log(plucking());

// // use name replacement;
// // Using as now you can't call It "shredding"
// console.log(shred()); 
// console.log(pluck());
// console.log(Guitars.playGuitar()); // you can't just call It like this

console.log(Guitars.default()); // if you have 'default keyword on the module file you do this way, better to 'not'' Using default keyword, you can only have 1 'default' keyword
console.log(Guitars.shredding());
console.log(Guitars.plucking());
const me = new User("email@email.com", "Dave");
console.log(me);
console.log(me.greetings());
