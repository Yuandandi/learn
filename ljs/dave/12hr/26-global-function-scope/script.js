// Global Scope{{{

// in browser type "" you'll get tons of methods and properties that we can access from anywhere whether we're just in our global page scope or if we're in a function or in a block or whatever;

// window.alert("foo");
// alert("foo"); // because window is a global scope you can just only call this way

const x = 100; // global scope

console.log(x, "in global"); // 100 in global ; we can access x global scope in here

function run() {
    console.log(window.innerHeight);
    console.log(x, "in function"); // 100 in function
    // console.log(y); // you can't access here either, only insinde the function body 'y' is declared
}

run();

if (true) {
    console.log(x, "in block"); // 100 in block
};
// }}}
// {{{ Function Scope 

function add() {
    const x = 1; // 51 here you reassigned the value of x to 1 called "variable shadowing"
    const y = 50; // function scope
    // console.log(y);
    console.log(x + y); // x is global and y is function scope both works here
};

console.log(x);

// console.log(y); // y is not defined ; you can't access function scope in global area

add(); // 50

// }}}
