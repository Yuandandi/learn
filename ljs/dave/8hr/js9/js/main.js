// Functions
// // {{{ Methods = Built-in functions
// console.log( "Dave".toLowerCase()  )
// console.log(Math.random());
// // we need function because we can call It again and again and again;}}}
// {{{ user declared function
// function declaration syntax;

function twoPlusTwo() { // twoPlusTwo, is function name
    return 2 + 2; // body function, if the function is called will return this 
}

console.log(twoPlusTwo()); // function needs to be called to executed
// }}}
// {{{ your function needs to have a meaning, to be reusable
function sum(num1, num2) { // num2 num1, is called a parameter
    return num1 + num2;
}

console.log(sum(3, 4));

function sum(num1, num2) {
    if (num2 === undefined) {
        return "input one more number please";
    }
    return num1 + num2;
}

console.log(sum(2));
// }}}
// {{{ slice the username from email
function getUsernameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUsernameFromEmail("jokoPardedeSuherman@gondrong.com"));

// store the function to the variable same as before
const namaPenggunaDariEmail = function (email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(namaPenggunaDariEmail("ramaSamba@kucing.meong"));
// }}}
// {{{ arrow function
const namaDariEmail = (email) => {
    return email.slice(0, email.indexOf("@"))
}

console.log(namaDariEmail("gondrongSumanto@foo.cok"));
// }}}
// {{{ propercase
const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    // first letter is uppercase, additional operator, index one which 2nd letter to the rest is lowercase;
}

console.log( toProperCase("joHnLembAng") );
// }}}
