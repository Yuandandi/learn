// usually we declare a variable with let ; 
// but starting with ES6 we can now declare variables with (let, const)
// let doesn't let You declare variable twice

let catName = "quincy";
let quote;

catName = "beau";

function catTalk() {
  "use strict"; // enables strict mode which catches common coding mistakes an unsafe actions
  catName = "Oliver";
  quote = catName + " says Meow!";
}

console.log(catTalk()); // SyntaxError: Identifier 'catName' has already been declared

// if we change let into var It will let You execute 'undefined'

// "use strict" directive ; new ECMAScript version 5. It is not a statement but a literal expression, ignored by earlier versions of JavaScript. to indicate that the code should be executed in "strict mode" (You can't undeclared variables) all browser support except IE 9 or lower
