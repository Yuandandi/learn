"use strict";
// {{{ Types
let stringArr = ["one", "hey", "dave"];
let guitars = ["strat", "les paul", 5150];
let mixedData = ["evh", 1984, true];
stringArr[0] = "John"; // string
stringArr.push("Jokowi"); // string
guitars[0] = 1984; // string or number
guitars.unshift("Jim");
// guitars.unshift(false); // string or number only
// stringArr = guitars; // string or number can't assigned to string
guitars = stringArr; // you can ; string onto string or number
// guitars = mixedData; // string or number or boolean can't onto string only
let test = []; // we haven stated a type so It has a type of "any"
let bands = [];
bands.push("Van Hallend"); // you can only push string type
// }}}
// {{{ Array Vs Tuples
// Tuple
let myTuple = ['dave', 42, true]; // the order is important
// tupples has a specific length;
let mixed = ['john', 1, false];
// array has no specific length;
// myTuple = mixed; // you can't assigned type of array onto tuples, because tuples has a fixed length
// mixed = myTuple; // you can do the opposite
// }}}
// Objects;{{{
let myObj;
myObj = [];
// console.log(typeof myObj); // Object
myObj = bands; // set to sting
// console.log(typeof {}); // Object
myObj = {}; // set to Object
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
// exampleObj.prop2= 42; // must be boolean
exampleObj.prop2 = true;
// }}}
// {{{ Types Declaration and Types Assignment{{{{{{
// type declaration;
// type Guitarist = {
//     name: string,
//     active: boolean,
//     album: (string | number)[]
// };
// type reusable;
let evh = {
    name: "Eddie",
    active: false, // if we remove this ; error property active is missing in type 
    album: [1984, 5150, "OU812"]
};
let jp = {
    // name: "Jimmy",
    active: true, // if we remove this ; error property active is missing in type 
    album: ["I", "II", "IV"]
};
;
const greetGuitarist = (guitarst) => {
    // Narrowing
    if (guitarst.name) {
        return `Hello ${guitarst.name.toUpperCase()}!`; // if we remove the '?' error ; Object is possibly undefined
        // if you put this into narrowing It won't complain;
    }
    return "Hello!";
};
// without the name we can still return a value;
console.log(greetGuitarist(jp)); // Hello!
// }}}
// {{{ Enum
// unlike most tss
// unlike most TypeScript features, enums are not a type-level addition to JavaScript but something added to the language
// and runtime;
// {{{ enumarated default number
// enum Grade { 
//     U,
//     D,
//     C,
//     B,
//     A,
// };
// console.log(Grade.U); // 0 ; this will get the 'enumerated' not 'index'
// // }}}
// enumarated{{{
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 8] = "U";
    Grade[Grade["D"] = 9] = "D";
    Grade[Grade["C"] = 10] = "C";
    Grade[Grade["B"] = 11] = "B";
    Grade[Grade["A"] = 12] = "A";
})(Grade || (Grade = {}));
;
console.log(Grade.D); // 9
// }}}
// }}};
