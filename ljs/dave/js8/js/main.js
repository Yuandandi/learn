// {{{ while loop and ++ post increment
let myNumber = 0;

while(myNumber < 50) {
    console.log(myNumber); // 0 - 49, if we change the order with myNumber++ below It will print 1 - 50
    // myNumber = myNumber + 1;
    myNumber++; // post increment
}
// }}}
// {{{  += addition operator
let angkaSaya = 0;
while(angkaSaya < 50) {
    angkaSaya += 2; // 2 - 50, addition assignment
    console.log(angkaSaya); // 0 - 48 if we change the order
}
// don't create an endless loop;
// }}}
// {{{ do while will execute at least once, not like ordinary loops
myNumber = 50;
do {
    console.log(myNumber);
} while (myNumber  < 50);
// }}}
// {{{ for loops
for (let i = 0; i < 10; i++) { // 'i' could be any name
    console.log(i);
}

// could be like this too;
// let i = 1;
// for (; i <= 10;) {
//     console.log(i);
//     i++;
// };

// // or like this;
// for (let i = 1; i <= 10;) {
//     console.log(i);
//     i++;
// }

// }}}
// {{{looping each letter of the name with for loop combined with .length properties and .charAt() function;
let name = "Danzor";

for (let i = 0; i < name.length; i++) { // i = 0, because the first letter 'D' is index 0
    console.log(name.charAt(i));
}
// }}}
// {{{ loops through string each letter until you get specific letter
let nama = "Dave";
let counter = 0;
let myLetter;
while (true) { // D a v, 
    myLetter = nama[counter];
    console.log(myLetter);
    if (myLetter === "v") break; // break to stop the loop
    counter++;
}// }}}
// {{{ 'continue' and 'break'
let jenenge = "Jaka";
let angkane = 0;
let hurufne;

while (angkane >= 3) {
    hurufne = jenenge[angkane];
    console.log(hurufne);
    if (angkane === 1) {
        angkane += 2;
        continue;
    }
    if (hurufne === "k") break;
    angkane++;
}
console.log(angkane);// }}}
