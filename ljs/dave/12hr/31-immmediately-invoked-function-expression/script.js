// {{{ IIFE (Immediately Invoked Function Expression)

// const user = "John"; // redeclaration of const user, because it's in the global scope

// IIFE scope can use the 'user' variable;
(function () { // function declaration
    const user = "John"; // function body
    console.log(user); // John
    const hello = () => console.log("Hello from the IIFE");
    hello(); // you can call here
})(); // function invoke

// hello(); // Hello is not defined ; because It in the IIFE scope

//  }}}
// {{{ IIFE passing parameter

(function (name) {
    console.log("Hello " + name);
    console.log(typeof name);
})("Shawty");

//  }}};
// {{{ IIFE conclusion

// your rarely see the IIFE because It only invoke in that scope, but It useful for debugging
(function hello() {
    console.log("Hello");
})();

// hello(); // can't because Its outside the IIFE

//  }}};
