// {{{ Variable Declare
let noAngkot = 1;
let jmlAngkot = 10;
let angkotBeroperasi = 6;
// }}}
// {{{ unnecessary else if
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
// {{{ logicl operator inside a condition
// for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= 6) {
//     console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
//   } else if (noAngkot === 8 || noAngkot === 10) { 
//     // logical operator inside a condition as long as They are true and the return condition are the same
//     console.log(`Angkot No. ${noAngkot} sedang lembur.`);
//   } else {
//     console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
//   }
// }
// // }}}
// {{{ Logicl Operator Inside a Condition better solution

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= 6 && noAngkot !== 5) {
        // hwen noAngkot = 5 <= 6; true, but 5 !== 5 is false so the block below won't executed to to the next else if
        console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) { 
        // add new condition noAngkot === 5 so will execute the block
        console.log(`Angkot No. ${noAngkot} sedang lembur.`);
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
    }
}

// }}}