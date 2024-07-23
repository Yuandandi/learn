// {{{ Ternary Operator ; shorter way to writing conditional

const age = 19;

// // Using an if statement;
// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You can't vote")
// };

// one line ternary operator, if the value is true or false only
age >= 18 ? console.log("You can vote") : console.log("You can't vote");

//  }}}
// {{{ Assigning a Conditional Value to a Variable

// const canVote = age >= 18 ? true : false;
const canVote = age >= 18 ? "you can vote" : "you can't vote";

console.log(canVote);

//  }}};
// {{{ Multiple Statements

const auth = false;
// let redirect;

// if (auth) {
//     alert("Welcome to the dashboard");
//     redirect = "/dashboard";
// } else {
//     alert("Access Denied")
//     redirect = "/login";
// }

// ternary operator if holds more than one return holds inside () and separate by ,;
const redirect = auth
    ? (alert("Welcome to the dashboard"), "/dashboard")
    : (alert("Access Denied"), "/login");

console.log(redirect);

// auth ? console.log("Welcome to the dashboard"); // SyntaxError: missing : in Conditional expressions
// auth ? console.log("Welcome to the dashboard") : null;
// if you don want to return else;

// or do this instead;
auth && console.log("Welcome to the dashboard");
// if it's true than do if it's false do nothing

//  }}};
