// {{{ Function Declaration

function addDolarSign(value) {
    return '$' + value;
} // we don't use ';' semicolon at the end of a function

// console.log(addDolarSign(100)); // $100

//  }}}
// {{{ Function Expression

const addPlusSign = function (value) {
    return "+" + value;
}; // at the end of expression is optional to have a ';' semicolon

console.log(addPlusSign(40)); // +40

//  }}};
// {{{ Hoisting

// is a way to store all of your function declaration onto the top of your file;
// before that we can console and invoke the function that are below the console itself which is weird;

// but we can't console the function that are hold in a variable if the variable is below the console (expression);

//  }}};
