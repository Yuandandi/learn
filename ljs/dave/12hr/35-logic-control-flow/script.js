// Truthy Falsy{{{
if (true) {
    console.log("This is true");
};

if (false) {
    console.log("This is true");
};
// }}}
// {{{ Comparison Operator

const x = 10;
const y = 5;

if (x > y) {
    console.log(`${x} is greater than ${y}`);
};

if (x === y) {
    console.log(`${x} is equal ${y}`);
} else {
    console.log(`${x} is not equal to ${y}`);
}

if (x !== y) {
    const z = 20;
    // var z = 20; // var is not block level scope, so It still work in global scope
    console.log(`${z} is 20`);
}

// Shorthand if ;
if (x >= y) 
    console.log(`${x} is not equal to ${y}`),
        console.log("This is true");
else console.log("this is false");

// this is a valid JavaScript;

// or like this;
if (x >= y) console.log(`${x} is not equal to ${y}`), console.log("This is true");
else console.log("this is false");

//  }}}
