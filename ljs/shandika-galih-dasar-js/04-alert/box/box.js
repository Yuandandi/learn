alert("selamat datang...")

let lagi = true;

// while ( lagi === true) {
while ( lagi ) { // this also works since 'lagi' is truthy value
  var nama = prompt("masukan nama:")
  alert("halo" + nama);

  lagi = confirm("coba lagi?"); 
  // will repeat again and again if you press OK, if not go to next line
}

alert("terima kasih..")
