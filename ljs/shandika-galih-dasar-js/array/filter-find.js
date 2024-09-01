let num = [23, 12, 54, 3, 53, 90];
// // {{{ .filter() method
// let hasilFilter = num.filter(function (x) {
//     // return x === 3; // [ 3 ]     exist number
//     // return x > 20; // [ 23, 54, 53, 90 ]     Math expression
//     return x === 8; // []       number not exest
// });

// // console.log(hasilFilter);
// // }}}
// {{{ .find() method

let hasilFind = num.find(function (x) {
    return x > 20;
});

console.log(hasilFind); // 23
// find only return the first occurrence

// }}}
