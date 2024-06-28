// conditionals: if statements
// {{{ syntax
/* ;
//sytnax
if (condition) {
    // run some code;
} else {
    // run some different code
}
*/
// }}}
// {{{ soup and crackers
let customerIsBanned = false; // if false go to the next statement
let soup = "chicken noodle soup"; // let soup; // if undefined, we're out of soup
let crackers = true;
let reply; // undefined

if (customerIsBanned) {
    reply = "No soup for you";
} else if (soup && crackers) { // if 'soup' is exist 
    reply = `Here's your order of ${soup} & crackers`; // return this 
} else if (soup) { // if 'soup' is exist 
    reply = `Here's your order of ${soup}`; // return this 
} else { // if not exist
    reply = `Sorry were out of ${soup}`; // return this
}

console.log(reply);// }}}
// {{{ nested if statement
// if else condition is like a waterfall if the first condition is met then return the result;

let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80){
    grade = "B";
} else if (testScore >= 70){
    grade = "C";
} else if (testScore >= 60){
    grade = "D";
} else {
    // nested if statement;
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F"
    }
}

console.log({grade});// }}}
// {{{ paper rock scissors
const playerOne = "rock";
const computer = "paper";
let result;

if (playerOne === computer) {
    result = "Tie game";
} else if (playerOne === "rock"){
    if (computer === "paper") {
        result = "computer wins";
    } else {
        result = "playerOne wins"
    }
} else if (playerOne === "paper"){
    if (computer === "scissors") {
        result = "computer wins";
    } else {
        result = "playerOne wins"
    }
} else { // playerOne === "rock" is the only left condition, no need to specify
    if (computer === "rock") {
        result = "computer wins";
    } else {
        result = "playerOne wins"
    }
}

console.log({ result });// }}}
