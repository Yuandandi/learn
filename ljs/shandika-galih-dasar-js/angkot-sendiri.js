let listPenumpang = ["cakra", undefined, "wanto"];

let penumpangNaik = function (namaPenumpang, listPenumpang) {
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

penumpangNaik("jaki", listPenumpang)
penumpangNaik("cakra", listPenumpang)
penumpangNaik("cinta", listPenumpang)
console.log(listPenumpang)
