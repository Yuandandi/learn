// // {{{ Sandika

// let tanya = true;
// while (tanya) {
//   let user = prompt("pilih: gajah, semut, orang");

//   let comp = Math.random();

//   if (comp < 0.34) {
//     comp = "gajah"
//   } else if (comp >= 0.34 && comp < 0.67) {
//     comp = "orang"
//   } else {
//     comp = "semut"
//   }

//   let hasil = "";

//   if (user === comp) {
//     hasil = "SERI"
//   } else if (user === "gajah") {
//     // you can do this
//     // if (comp === "orang") {
//     //   hasil = "KALAH"
//     // } else {
//     //   hasil = "MENANG"
//     // }
//     // or use ternary operation instead
//     hasil = (comp === "orang") ? "MENANG!" : "KALAH!";
//   } else if (user === "orang") {
//     // if (comp === "gajah") {
//     //   hasil = "KALAH"
//     // } else {
//     //   hasil = "MENANG"
//     // }
//     hasil = (comp === "gajah") ? "KALAH!" : "MENANG!";
//   } else if (user === "semut") {
//     hasil = (comp === "orang") ? "KALAH!" : "MENANG!";
//   } else {
//     hasil = "hanya bisa memilih 'gajah', 'semut', 'orang'"
//   }

//   alert(`kamu memilih ${user} dan komputer memilih ${comp} \nMaka hasilnya : kamu ${hasil}`)

//   tanya = confirm("lagi?");
// }

// alert("terimakasih sudah bermain")

// // }}}
// {{{ Mine

let tanya = true;

while (tanya) {

  let user = prompt("silahkan pilih salah satu: gajah, orang, semut");
  let comp = Math.random()

  if (comp < 0.34) {
    comp = "semut"
  } else if (comp >= 0.34 && comp <= 0.67) {
    comp = "orang"
  } else {
    comp = "gajah"
  }

  let hasil = "";

  if (user === comp) {
    hasil = "seri"
  } else if (user === "gajah") {
    hasil = (comp === "orang") ? "menang" : "kalah"
  } else if (user === "orang") {
    hasil = (comp === "gajah") ? "kalah" : "menang"
  } else if (user === "semut") {
    hasil = (comp === "orang") ? "menang" : "kalah"
  } else {
    hasil = "hanya bisa memilih (gajah, semut, orang)"
  }

  alert(`Kamu memilih ${user} dan komputer memilih ${comp}\nKamu ${hasil}`);

  tanya = confirm("mau main suit lagi gak?");
};

alert("makasih udah mau main suit sama aku, sampai jumpa")

// }}}
