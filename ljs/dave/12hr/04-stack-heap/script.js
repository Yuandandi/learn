// Values are stored on the heap
const name = "John";
const age = 30;

// Reference values are store on the heap
const person = {
    name: "brad",
    age: 40
};

let newName = name;
newName = "Johnatan";

let newPerson = person;
newPerson.name = "Bradley";

console.log(name, newName); // John Johnatan
console.log(person, newPerson) // { name: 'Bradley', age: 40 } { name: 'Bradley', age: 40 } ; both are changed because It reference on the same one "heap" spot
