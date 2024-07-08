let num = 5; // number

num = new Number(5) // object

// console.log(typeof num);

let x;

x = num.toString();  // 5
x = num.length // undefined
x = num.toString().length; // 1 ; to know How many digits
x = num.valueOf(); // 5 ; number

x = Number.MAX_VALUE; // 1.7976931348623157e+308 ; the largest number possible we can use with number
x = Number.MIN_VALUE; // 5e-324 ; lowest number possible we can use

console.log(x);

let angka = 5.23543454;// {{{

let y;
y = angka.toFixed(2); // 5.24

y = angka.toPrecision(); // 5.23543454
y = angka.toPrecision(2); // 5.2

y = angka.toExponential(2); // 5.24e+0

y = angka.toLocaleString(); // 5.235
y = angka.toLocaleString('ar-EG'); // ٥٫٢٣٥
y = angka.toLocaleString(["ban", "id"]); // 5,235 ; Indonesian format

// console.log(y)// }}}
