let noAngkot = 1;
let angkotBeroperasi = 6
let jmlAngkot = 10
while (noAngkot <= angkotBeroperasi) {
  console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`)
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`)
}
