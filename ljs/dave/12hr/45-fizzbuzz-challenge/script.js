// // {{{ For Loop

// for (let i = 0; i <= 100; i++) {
//     // if (i % 3 === 0 && i % 5 === 0) {
//     if (i % 15 === 0) { // shorten
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) { // modulus 3
//         console.log("Fizz");
//     } else if (i % 5 === 0) { // modulus 5
//         console.log("Buzz")
//     } else {
//         console.log(i); // remove the number that will replace by Fizz Buzz or FizzBuzz
//     }
// }

// //  }}}
// {{{ While Loop

let j = 1;

while (j <= 100) {
    if (j % 15 === 0) { // shorten
        console.log("FizzBuzz");
    } else if (j % 3 === 0) { // modulus 3
        console.log("Fizz");
    } else if (j % 5 === 0) { // modulus 5
        console.log("Buzz")
    } else {
        console.log(j); // remove the number that will replace by Fizz Buzz or FizzBuzz
    }

    j++;
};

//  }}};
