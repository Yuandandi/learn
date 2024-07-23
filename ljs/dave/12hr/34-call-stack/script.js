// // Push and Pop One by One{{{
// function first() {
//     console.log("first...");
// }

// function second() {
//     console.log("second...");
// }

// function third() {
//     console.log("third...");
// }

// first();
// second();
// third();
// // }}}
// {{{ second third on top of first

function first() {
    console.log('first...');
    second();
}

function second() {
    console.log('second...');
    third();
}

function third() {
    console.log('third...');
}

first();

//  }}};
