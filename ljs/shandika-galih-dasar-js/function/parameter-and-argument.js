// {{{ Definition
// Parameter
// variable yang di tulis di dalam () pada saa function dibuat, digunakan untuk menampung nilai yang dikirimkan saat function dipanggil

// Argument
// nilai yang dikirimkan ke parameter saa fungsi dipanggil
// }}}
// // {{{ Which One Is Parameter or Argument

// // a and b is parameter
// function tambah(a, b) {
//     return a + b;
// }

// // 5 and 10 is an Argument
// let hasil = tambah(5, 10);
// console.log(hasil); // 15

// // }}};
// // {{{ Argument passing from global scope

// function tambah(a, b) {
//     return a + b;
// }

// let a = 10; // this is global scope that will transfer it's value to Argument below
// let b = 20;

// let hasil = tambah(a,b); // a,b as parameter and a,b as Argument here are different
// console.log(hasil); 

// // }}};
// // {{{ Argument passing from user

// function tambah(a, b) {
//     return a + b;
// }

// let a = parseInt(prompt("masukan bilangan bulat 1"));
// let b = parseInt(prompt("masukan bilangan bulat 2"));
// // prompt is window Object that will return string, so we passing as an Argument of parseInt() Object to turn the value as integer/number;

// // let hasil = tambah(a * 2,b * 2); // Argument with mathematical operation
// let hasil = tambah(a,b); 
// console.log(hasil); 

// // }}};
// // {{{ Argument Passing Another Function

// function tambah(a, b) {
//     return a + b;
// }

// function kali(a, b) {
//     return a * b;
// }

// let hasil = kali(tambah(1, 2), tambah(3, 4));
// console.log(hasil); // 3 * 7 = 21

// // }}};
// // {{{ Argument and Parameter Not Suitable

// // Parameter < Argument = kelebihan Argument will be ignored
// function less(a, b) {
//     return a + b;
// }

// console.log(less(10,20,40,50)); // 30; 40 and so on will be ignored

// // Parameter > Argument = kekurangan Argument will be filled 'undefined'
// function more(a, b, c, d) {
//     return a + b;
// }

// console.log(less(10)); // NaN; not a number

// // }}};
// // {{{ Arguments not Argument
// // array yang berisi nilai yang dikirimkan saat fungsi dipanggil
// // pseudo variable

// function tambah() {
//     return arguments;
// }

// // Everything you passed in Argument will be stored into 'pseudo variable' as an array;
// let coba = tambah(5, 10, "hi", false);
// console.log(coba); // [Arguments] { '0': 5, '1': 10, '2': 'hi', '3': false }

// // }}};
// {{{

function tambahSemua() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    };
    return hasil;
}

console.log(tambahSemua(3, 9, 4, 2)) // 18

// }}};
