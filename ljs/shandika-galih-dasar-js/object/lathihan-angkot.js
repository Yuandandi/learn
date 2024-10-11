// Angkot Function Constructor

function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.kas = kas;
    this.penumpang = penumpang;
    this.penumpangNaik = function (namaPenumpang) { // function inside an Object is a method
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    };
    this.penumpangTurun = function (namaPenumpang, bayar) {
        // if empty then console
        if (this.penumpang.length === 0) {
            console.log("Angkot masih kosong");
            return false; // to excit the blocks
        }

        for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] === namaPenumpang) {
                this.penumpang[i] = undefined; // set penumpang yang turn onto undefined
                this.kas += bayar; // add bayar onto kas
                return this.penumpang;
            }
        } 
    }
}

let angkot1 = new Angkot("Shandika Galih", ["Cicaheum", "Cibiru"], [], 0);
let angkot2 = new Angkot("Jaka Linggis", ["Antapani", "Ciroyom"], [], 0);



angkot1.penumpangNaik("Sulis");// {{{
console.log(angkot1.penumpang); // we have Sulis
console.log(angkot2.penumpang); // []

angkot1.penumpangNaik("Joni");
console.log(angkot1.penumpang); // ["Sulis", "Joni"]

angkot2.penumpangNaik("Santo");
console.log(angkot2.penumpang); // ["Santo"]

angkot1.penumpangTurun("Joni", 2000);
console.log(angkot1.kas); // 2000

angkot1.penumpangTurun("Sulis", 5000);
console.log(angkot1.kas); // 7000
console.log(angkot1.penumpang); // [undefined, undefined]

angkot2.penumpangTurun("Santo", 3000)
console.log(angkot2.kas); // 3000
console.log(angkot2.penumpang)

// }}}
