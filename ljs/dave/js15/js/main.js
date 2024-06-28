// JavaScript errors and error handling
// weird thing js does
// variable = "dave"
// console.log(variable);
// variable is not defined;
// "use strict" // if we use this It will throw an error
// variable = 'Dave'; // variable is not defined
// console.log(variable);
// token error;
// "use strict";
// Object..create() // unexpected token '.'
// // type error ; assignment to constant variable;
// "use strict";
// const name = "dave";
// name = "Joe";
// first form;
// "use strict"
// const makeError = () => { // arrow function
//     try { // try and catch block
//         // try block will executed first, and if It throws an exception, the code in the 'catch' will be executed;
//         const name = "dave" 
//         name = "joe";
//     } catch (err) { // catch method
//         // console.log(err); // will catch What the log says (It might be different form each browser)
//         // console.error(err); // method writes an error message to the console, useful for testing purpose, most of the time It in a red color
//         // console.warn(err); // method writes a warning to the console, in gold-ish brown color
//         // console.table(err); // method writes a table to the console

//         // console.error(err.name); // TypeError ; type name
//         // console.error(err.message); // Its message
//         console.error(err.stack); // stack trace of an error to the console. useful for debuging, detail information about where the error occured

//     }
// };
// makeError();
// "use strict"
// const makeError = () => { // arrow function
//     try {
//         throw new customError("This is a custom error!")
//     } catch (err) { 
//         console.error(err.name); 
//         console.error(err.message); 
//         console.error(err.stack); 
//     }
// }
// makeError();

// function customError(message) {
//     this.message = message;
//     this.name = "CustomError";
//     this.stack = `${this.name}: ${this.message}`;
// };
// // generic form of error
// "use strict"
// const makeError = () => { // arrow function
//     try {
//         throw new Error("This is a custom error!") // Error() ; method passing a generic error form
//     } catch (err) { 
//         console.error(err.name); // Using generic error you can't modify error name
//         console.error(err.message); 
//         console.error(err.stack);
//     } finally { // whether there's an error or not, It still executed
//         console.log("...finally")
//     }
// }
// makeError(); 
// generic form of error
"use strict"
const makeError = () => { // arrow function
    let i = 1;
    while ( i <= 5) {
        try {
            if (i % 2 !== 0) { // if it's odd throw an error, if it's even number and the finally block
                throw new Error("Odd number!")
            }
            console.log("Even number!")
        } catch (err) { 
            console.error(err.stack);
        } finally { // whether there's an error or not, It still executed
            console.log("...finally")
        }
    };
}
makeError(); 
