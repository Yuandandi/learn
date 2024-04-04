// do while loops
// first check the condition before run any code within the loops
// run at least one time, and then It will check the condition

var myArray = [];
var i = 10;

// paling tidak jalanin kode do sekali walaupun kondisi while di bawah sudah met (10 > 5) ; nilai i menjadi 10 untuk loop pertama dan langsung berhenti
// myArray menjadi 11 karena i++ sekali loop dan langsung berhenti karena met i
// < 5
do {
  myArray.push(i);
  i++;
} while (i < 5)

console.log(i, myArray);
