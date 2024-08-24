# logical operator
- && ; and 
- || ; or
- ! ; not

var x = 5; 
console.log(x % 2 == 0);
false

var x = 5; 
console.log((x % 2 == 0) && (x < 10));
false and true ; false
if there's one false then false

var x = 5; 
console.log((x % 2 == 0) || (x < 10));
false or true ; true
if there's one true than true

## string operator

var a = "apple";
var b = "pen";
console.log(a + b);
"applepen"

console.log(10 + "10");
"1010"

console.log(10 + "10");
"1010"

console.log(10 + 10 + "10");
"2010"
if there's one string then return string

## typeof 

typeof(operand)

    console.log(typeof(10));
    number

    console.log(typeof("10"));
    string

    console.log(typeof(true));
    boolean

### conditional operator
    ternary operator
    (kondisi) ? benar : salah
    
    var x = 4
    console.log((x % 2 == 0) ? "genap" : "ganjil");
    genap
