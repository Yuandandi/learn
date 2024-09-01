// {{{ Function Declaration

// more flexible (because of the concept 'hoisting')
// easy to understand for beginners 

// in JavaScript there's a thing called "hoisting";
// which all the function will be declared first
// so we can invoke the function above the function itself;

console.log(panggil('joko'));

function panggil(nama) {
    return `hallo ${nama}`
}

// console.log(panggil("joko"));

// }}}
// {{{ Function Expression

// has to be declared first before being invoked
// more powerful (as closure, as an Argument for another function, IIFE (immediate invoked function expression));

// 'hoisting' didn't work in Function expression;

console.log(calling("santi")); // E: cannot access "panggil" before initialization

// your Function has no name but It stored in a variable;
let calling = function (nama) {
    return `halo ${nama}`;
};

console.log(calling("santi")); // halo santi

// }}};
