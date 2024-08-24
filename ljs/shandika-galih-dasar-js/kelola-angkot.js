let penumpang = ["sani", undefined ,"bram", undefined, "Joko"] ;

let tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length === 0) {
    penumpang.push(namaPenumpang)
    return penumpang
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === undefined) {
        penumpang[i] = namaPenumpang
        return penumpang
      }  else if (penumpang[i] === namaPenumpang) {
        console.log(`${namaPenumpang} sudah ada di dalam angkot masukan nama lain`)
        return penumpang
      } else if (i === penumpang.length - 1) {
        penumpang.push(namaPenumpang)
        return penumpang
      }
    }
  }
}

// jika angkot kosong
// tambah penumpang di awal array
// kembalikan isi array & keluar dari function
// else
//   telusuri seluruh kursi dari awal
// jika ada kursi kosong
// tambah penumpang di kursi tersebut
// kembalikan isi array & keluar dari function
// jika seluruh kursi terisi
// tambah penumpang di akhir array
// kembalikan isi array & keluar dari function

console.log(tambahPenumpang("Jaka", penumpang)) // jaka menempati undefined 
console.log(tambahPenumpang("Citra", penumpang)) // citra dan seterusnya menempati kursi akhir
console.log(tambahPenumpang("Yayan", penumpang)) // citra dan seterusnya menempati kursi akhir
console.log(tambahPenumpang("Jaka", penumpang)) // Jaka sudha ada console peringatan
