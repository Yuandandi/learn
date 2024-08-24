// {{{ My Solution

let listPenumpang = ["cakra", undefined, "wanto"];

let tambahPenumpang = function (namaPenumpang, listPenumpang) {
  if (listPenumpang.length === 0) {
    listPenumpang.push(namaPenumpang)
    return listPenumpang
  } else {
    for (let i = 0; i < listPenumpang.length; i++) {
      if (listPenumpang[i] === undefined) {
        listPenumpang[i] = namaPenumpang
        return listPenumpang
      } else if (i === listPenumpang.length - 1) {
        listPenumpang.push(namaPenumpang)
        return listPenumpang
      } else if (listPenumpang[i] === namaPenumpang) {
        console.log(`${namaPenumpang} sudah ada coba yang lain`)
        return listPenumpang
      }
    } 
  }
}

tambahPenumpang("jaki", listPenumpang)
tambahPenumpang("cakra", listPenumpang)
tambahPenumpang("cinta", listPenumpang)

let hapusPenumpang = function (namaPenumpang, listPenumpang) {
  if (listPenumpang.length === 0) {
    console.log("angkot masih kosong")
  } else {
    for (let i = 0; i < listPenumpang.length; i++) {
      if (listPenumpang[i] === namaPenumpang) {
        listPenumpang[i] = undefined;
        return listPenumpang
      } else if (namaPenumpang !== listPenumpang[i]) {
        console.log(`${namaPenumpang} tidak ada dalam angkot`)
        return false
      }
    }
  }
}

hapusPenumpang("cakra", listPenumpang)
hapusPenumpang("rendi", listPenumpang)
tambahPenumpang("banu", listPenumpang)
tambahPenumpang("wawan", listPenumpang)

console.log(listPenumpang)


// }}}
// // {{{ Sandika Solution

// let listPenumpang = ["cakra", undefined, "wanto"];

// let tambahPenumpang = function (namaPenumpang, listPenumpang) {
//   if (listPenumpang.length === 0) {
//     listPenumpang.push(namaPenumpang)
//     return listPenumpang
//   } else {
//     for (let i = 0; i < listPenumpang.length; i++) {
//       if (listPenumpang[i] === undefined) {
//         listPenumpang[i] = namaPenumpang
//         return listPenumpang
//       } else if (i === listPenumpang.length - 1) {
//         listPenumpang.push(namaPenumpang)
//         return listPenumpang
//       } else if (listPenumpang[i] === namaPenumpang) {
//         console.log(`${namaPenumpang} sudah ada coba yang lain`)
//         return listPenumpang
//       }
//     } 
//   }
// }

// tambahPenumpang("jaki", listPenumpang)
// tambahPenumpang("cakra", listPenumpang)
// tambahPenumpang("cinta", listPenumpang)

// let hapusPenumpang = function (namaPenumpang, listPenumpang) {
//   if (listPenumpang.length === 0) {
//     console.log("angkot masih kosong")
//   } else {
//     for (let i = 0; i < listPenumpang.length; i++) {
//       if (listPenumpang[i] === namaPenumpang) {
//         listPenumpang[i] = undefined;
//         return listPenumpang
//       } else if (i === listPenumpang.length - 1) {
//         console.log(`${namaPenumpang} tidak ada dalam angkot`)
//       }
//     }
//   }
// }

// hapusPenumpang("cakra", listPenumpang)
// hapusPenumpang("rendi", listPenumpang)
// tambahPenumpang("banu", listPenumpang)
// tambahPenumpang("wawan", listPenumpang)

// console.log(listPenumpang)


// // }}}
