// {{{ Variable Declaration

let noAngkot = 1;
let jmlAngkot = 10;
let angkotBeroperasi = 6;

// }}}
// {{{ Unnecessary Else If
// for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) 
//   if (noAngkot <= 6) {
//     console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
//   } else if (noAngkot === 8) {
//     console.log(`Angkot No. ${noAngkot} sedang lembur.`);
//   } else if (noAngkot === 10) {
//     console.log(`Angkot No. ${noAngkot} sedang lembur.`);
//   } else {
//     console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
//   }
// }
// }}}
// {{{ Logicl Operator Inside a Condition
for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  } else if (noAngkot === 8 || noAngkot === 10) { 
    // logical operator inside a condition as long as They are true and the return condition are the same
    console.log(`Angkot No. ${noAngkot} sedang lembur.`);
  } else {
    console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
  }
}
// }}}
