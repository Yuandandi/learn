let namaSaya: string = "danzor";
let userName: number = 123;
let isDead: boolean = true;
let pacarSaya = "foo"; // auto detect to string
// pacarSaya = 8; // reassign to number won't work

let pacarAnu: number | string; // you can add as many data type you want
pacarAnu = "ada lima";

let pacarDia : any // note recommended to use any cause, just use vanilla js laaa
// let kelompokA: [string, string]; // array data type you need to specify each items
let kelompokA: string[]; // better this way if all the items has the same data type
kelompokA = ["ica", "sani"]; // tupple type

console.log({ namaSaya });
console.log({ userName });
console.log({ isDead });
console.log({ pacarSaya });
console.log({ pacarAnu });
console.log({ kelompokA });
