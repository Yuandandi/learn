// {{{ Nested Object Type
var person1 = {
    name: "Joe",
    age: 42,
    isStudent: true, // you don't have to passing address here
};
var person2 = {
    name: "Jill",
    age: 62,
    isStudent: true,
    address: {
        street: "Johor",
        city: "",
        country: "Malaysia",
    },
};
var person3 = {
    name: "Jill",
    age: 62,
    isStudent: true,
    address: {
        street: "Johor",
        city: "",
        country: "Malaysia",
    },
};
function displayInfo(person) {
    var _a;
    console.log("".concat(person.name, " lives at ").concat((_a = person.address) === null || _a === void 0 ? void 0 : _a.street));
} // person1 might be don't have an address, so we pass '?' so the program is not error 
displayInfo(person1);
// }}}
