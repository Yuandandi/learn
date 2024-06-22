type Pengguna = {
    readonly _id: string // readonly ; we won't be able to change It
    name: string
    email: string
    isActive: boolean
    creditCardDetail?: number; // "?" meeans optional , for example people doesn't have a credit card
}

let dataPengguna: Pengguna = {
    _id: "1243",
    name: "foo",
    email: "foo@foo.com",
    isActive: false,
    creditCardDetail: 899 // you can comment this and It works just fine
}

// type cardNumber = {
//     cardnumber: string
// }
// type cardDate = {
//     carddate: string
// }
// type cardDetails = cardNumber & cardDate & { // nested type declaration is not a good practice but It stilll works just fine
//     cvv: number
// }

dataPengguna.email = "bar@bar.com"; // change the email properties
// dataPengguna._id = "3244"; // cannot assign, because It read-only property
console.log(dataPengguna);
