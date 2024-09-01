// recursion ; function that call himself
// all looping can be made otno rekursif but not the other way;

// // {{{ sample with loop

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// // }}};
// // {{{ Infinite Loop

// function showTheNumber(n) {
//     console.log(n);
//     return showTheNumber(n-1);
// };

// showTheNumber(10);
// // RangeError: Maximum call stack size exceeded, in node you got a cool stop infinte
// // you got that in browser too but your browser might be hang first

// // }}};
// // {{{ Infinite Loop

// function showTheNumber(n) {

//     // Base case, so It won't get Infinite loop
//     if (n === 0) {
//         return;
//     };

//     console.log(n);
//     return showTheNumber(n-1);
// };

// showTheNumber(10);

// // }}};
// // {{{ Faktorial With Recursive Technique

// function faktorial(n) {
//     if (n === 0) return 1;
//     return n * faktorial(n-1);
//     // looping in here 5 * faktorial(5-1); and call the faktorial with parameter 4
//     // until you got n = 0;
//     // 0 === 0 return 1
//     // 5 * (4 * (3 * (2 * 1)));
// };

// console.log(faktorial(5)); // 120

// // }}};
// {{{ Faktorial With Looping
function faktorial(n) {
    let hasil = 1;
    for (let i = n; i > 0; i--) {
        hasil *= i;
    };
    return hasil;
};

console.log(faktorial(5)); // 120
// }}}
// {{{ recursive implementation;

// replace looping
// fibonacci
// pencarian dan penelusuran pada struktur data dan tree
// programming language that has no looping e.g. haskel, erlang, prolog

// }}}
