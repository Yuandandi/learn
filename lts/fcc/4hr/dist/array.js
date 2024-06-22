"use strict";
const superHero = [];
const heroPower = [];
superHero.push("Spiderman");
heroPower.push(30);
console.log({ heroPower });
const allUser = [];
allUser.push({ name: "", isActive: true });
console.log({ allUser });
const MLModels = [
    [100, 200, 400],
    []
];
console.log({ MLModels });
function doStuff(values) {
    const copy = values.slice();
    console.log(`the first value is ${values[0]}`);
}
;
doStuff(["foo", "hahah"]);
