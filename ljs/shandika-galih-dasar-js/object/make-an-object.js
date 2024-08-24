// Making an Object

// // {{{ Object literal

// let mhs = {
//   name: "danzor", // this called attribute
//   nrp: "0342312358",
//   email: "danzor.cock.li",
//   major: "Science"
// };

// console.log(mhs);

// // cerarte new mhs;
// let mhs2 = {
//   name: "chika", // this called attribute
//   nrp: "0923494345",
//   email: "chika@cock.li",
//   major: "Math"
// };

// console.log(mhs2);
// // so complicated to cteate a new Object even though They have the same attribute;

// // }}}

// // {{{ Function Declaration

// function objMhs(name, nrp, email, major) {
//   let mhs = {};
//   mhs.name = name;
//   mhs.nrp = nrp;
//   mhs.email = email;
//   mhs.major = major;
//   return mhs;
// }

// let mhs3 = objMhs("Jaka", "0923483413", "Jaka@cock.li", "Industry")
// let mhs4 = objMhs("Shandy", "032435425", "Shandy@cock.li", "Geography")
// // we only need to pass a value, because all of the keys are same
// console.log(mhs3)
// console.log(mhs4)

// // }}}

// {{{ Constructor Function (Keyword New)

function DeclareMhs(name, nrp, email, major) {
  this.name = name;
  this.nrp = nrp;
  this.email = email;
  this.major = major;
  // we don't need declare new variable and return statement
}

let mhs5 = new DeclareMhs("Susanto", "09035203523", "Susanto@cock.li", "FashionFashion Design");
let mhs6 = new DeclareMhs("Coki", "02345130958", "Coki@cock.li", "Theoism");

console.log(mhs5, mhs6);

// }}}

// {{{ Object.create()


// }}}
