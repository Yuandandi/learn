let ages: number[] = [100, 30]; // primitive data type, meaning you don't have to passing : number[] (detect automatically)
// let ages: number[] = [100, 30, "one"]; // E: array of number only
// ages.push(true); // E: number only

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
};

let person2: Person = {
    name: "Jill",
    age: 70,
    isStudent: false,
};

// challenge: create an array of people objects and mannually type is as an array of Person types
let people: Person[] = [person1, person2];
// let people: Array<Person> = [person1, person2]; // you can do this too
