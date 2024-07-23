// // {{{ Do While Syntax

// let i = 0;

// while (i <= 20) {
//     console.log("Number " + i);
//     i++;
// };


// //  }}}
// {{{ When to Use for Loop or While Loop

//     for loop When
//     you kneow the number of times that you wnat the loop to run

//     while loop When
//     When the number of times the loop will run is unknown;

// }}}
// // {{{ Loop Over Arrys

// let i = 0;

// const arr = [10, 20, 30 , 40];

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// };

// //  }}};
// // {{{ Nesting While Loop

// let i = 1;

// while (i <= 5) {
//     console.log("Number " + i);

//     let j = 1;
//     while (j <= 5) {
//         console.log(`${i} * ${j} = ${i * j}`);
//         j++;
//     }
//     i++;
// }

// //  }}};
// {{{ Do While Loop

// always run at least once even if the condition is false;

// let i = 1; // Number 1 - Number 20
let i = 21; // Number 21 ; even though It false It still run once

do {
    console.log("Number " + i)
    i++;
} while (i <= 20);

//  }}};
