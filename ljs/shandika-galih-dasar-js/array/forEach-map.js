let num = [1, 2, 3, 4, 5, 6, 7, 8];
let nama = ["sandika" , "reihan", "randy"];
let messNumber = [2, 4, 1, 5, 6, 6];

// {{{ forEach() method

// // {{{ with loop sample

// for (i = 0; i < num.length; i++) {
//     console.log(num[i])
// }

// // }}};

// // {{{ forEach() method

// num.forEach(function(e) {
//     console.log(e);
// })

// // }}};

// // {{{ forEach() with index

// nama.forEach(function (e, i) {
//     console.log(`Mahasiswa ke-${i + 1} adalah: ${e}`);
// });
// // Mahasiswa ke-1 adalah: sandika
// // Mahasiswa ke-2 adalah: reihan
// // Mahasiswa ke-3 adalah: randy

// // }}};

// }}}
// // {{{ .map() method
// let angka2 = num.map(function (e) {
//     // let angka2 = num.forEach(function (e) { // forEach gak mengembalikan array like .map do so It will be error
//     return e * 2;
// })

// console.log(angka2.join(" - ")); // 2 - 4 - 6 - 8 - 10 - 12 - 14 - 16

// // }}};
// {{{ .sort() method

messNumber.sort();
// console.log(messNumber); // [ 1, 2, 4, 5, 6, 6 ]
// here's no problem, but the problem will showed once you have 2 or more digits number;

messNumber = [1, 10, 2, 8, 4, 3, 20];
// console.log(messNumber.sort().join(" - "));  // 1 - 10 - 2 - 20 - 3 - 4 - 8
// mengurutkan karakter pertamanya terlebih dahulu 'lexicographical sort';

// proper way;
messNumber.sort(function (a, b) {
    return a - b;
    // if a < b ; a placed before b;
    // if a > b ; a placed after b;
    // if a === b ; no change;
});

console.log(messNumber.join(" - ")); // 1 - 2 - 3 - 4 - 8 - 10 - 20

// with parseInt();{{{
let arr = ["10", "2", "30", "4"]; // item treat as a string which .sort method properly sort
arr.sort((a, b) => parseInt(a) - parseInt(b));
console.log(arr); // ["2", "4", "10", "30"]

// Using Array.prototype.sort with parseInt, you can sort a numeric array containing string numbers by converting them to integers
// during comparison. This ensures proper numerical sorting, rather than lexicographical sorting based on string values.}}}

// }}};
num
