# Operator
Operator dalam JavaScript adalah sebuah simbol yang digunakan untuk melakukan operasi

## operator binary
operator yang membutuhkan 2 operand
operand1 operator operand2
- aritmatika
- penugasan
- perbandingan
- logika
- string

## ternary
membutuhkan 3 operand
- kondisional

## unary
membutuhkan 1 operand
operand operator
operator operand
- typeof

### aritmatika
- + ; tambah
- - ; kurang
- * ; kali
- / ; bagi
- % ; modulus (sisa bagi)

#### operator precedence
1 + 2 * 3 - 4 = 3
prosedur matematika berurutan () * / + -

### comparison operator
membandingkan 2 buah nilai return boolean (true, false)

    console.log(10 == 15); false
    console.log(10 == "10"); true ; value is the same but the type is different
    console.log(10 === "10"); false ; now JavaScript is aware of the type
    console.log(10 == 10); true
