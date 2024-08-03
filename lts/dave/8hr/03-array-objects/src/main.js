"use strict";
let stringArr = ["one", "hey", "dave"];
let guitars = ["strat", "les paul", 5150];
let mixedData = ["evh", 1984, true];
stringArr[0] = "John";
stringArr.push("Jokowi");
guitars[0] = 1984;
guitars.unshift("Jim");
guitars = stringArr;
let test = [];
let bands = [];
bands.push("Van Hallend");
let myTuple = ['dave', 42, true];
let mixed = ['john', 1, false];
let myObj;
myObj = [];
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop2 = true;
let evh = {
    name: "Eddie",
    active: false,
    album: [1984, 5150, "OU812"]
};
let jp = {
    active: true,
    album: ["I", "II", "IV"]
};
;
const greetGuitarist = (guitarst) => {
    if (guitarst.name) {
        return `Hello ${guitarst.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 8] = "U";
    Grade[Grade["D"] = 9] = "D";
    Grade[Grade["C"] = 10] = "C";
    Grade[Grade["B"] = 11] = "B";
    Grade[Grade["A"] = 12] = "A";
})(Grade || (Grade = {}));
;
console.log(Grade.D);
