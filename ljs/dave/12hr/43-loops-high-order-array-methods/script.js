// {{{ For Loop Syntax

// for ([initialExpression]; [conditionalExpression]; [incrementExpression])
//     statement;

// INITIAL EXPRESSION; initializing a variable / counter
// CONDITIONAL EXPRESSION; condition that the loop will continua to run as long as It is met or until the condition is false
// INCREMENT EXPRESSION; expression that will be executed after each iteration of the loop. usually increments the variable
// STATEMENT; code that will be executed each time the logo is run. to execute a 'block' of code, use the '{}' syntax

//  }}}
// // {{{ For Loop Sample

// // for (let i = 0; 1 <= 10; i++) {
// //     console.log("Number " + i)
// // };

// for (let i = 0; i <= 10; i++) { // we have to use let, if we use const ; type assignment to constant variable
//     if (i === 7) {
//         console.log("7 is my lucky number");
//     } else { // this way won't showed up the "Number 7"
//         console.log("Number " + i); // if we change to var we can access outside of this block scope
//     }
// }


// //  }}}
// // {{{ Nest Loops

// // perkalian 1 - 10, 10 column each
// for (let i = 1; i <= 10; i++) {
//     console.log("Number " + i);

//     for (let j = 1; j <= 10; j++) { // change the number 10 to 5 to make perkalian 5 columns each
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// //  }}};
// {{{ loop through an array

const names = ["Brad", "Sam", "Sara", "John", "Tim"];

for (let i = 0; i < names.length; i++) {
    if (names[i] === "Tim") { // you can change whes the best by changing string
        console.log(names[i] + " is the best"); // accessing that names index
    } else {
        console.log(names[i]);
    };
};

//  }}};
