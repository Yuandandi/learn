// // {{{ stored as a valriable

// var namaMhs = "Danzor";
// var umurMhs = 20;
// var lulus = true;
// var ips = [2.90, 3.10, 3.25, 2.88, 3.04];

// function IPKumulatif(ips) {
//   let total = 0;
//   for (let i = 0; i < ips.length; i++) {
//     total += ips[i]
//   }
//   return total/ips.length;
// }

// console.log(IPKumulatif(ips))
// // this will be a problem if we have many student
// // we'll need namaMhs2, umurMhs2, lulus2 and soon

// // }}}
// // {{{ stored as a array

// var mhs = ["Danzor", true, [2.90, 3.10, 3.25, 2.88, 3.04]];

// function IPKumulatif(ips) {
//   let total = 0;
//   for (let i = 0; i < ips.length; i++) {
//     total += ips[i]
//   }
//   return total/ips.length;
// }

// console.log(IPKumulatif(mhs[2]))
// // now the parameter Using an index of array)
// // if we need to add mhs we tak mhs2, mhs3 so on as an array
// // withoud assing variable "name", "lulus", "ips"

// // }}}
// {{{ Stored as an Obj

var mhs = {
  nama: "Danzor",
  lulus: true,
  ips: [2.90, 3.10, 3.25, 2.88, 3.04],
  ipk: function () {
    let total = 0;
    let ips = this.ips; // 'this' keyword refers to mhs Object
    for (let i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total/ips.length;
  }
}


console.log(mhs.ipk())
// if there's new mhs we just need to add onto mhx Object

// }}}
