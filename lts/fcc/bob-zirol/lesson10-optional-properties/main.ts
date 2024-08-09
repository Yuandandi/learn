// {{{ Nested Object Type

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address; // ? meaning optional
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true, // you don't have to passing address here
};

let person2: Person = {
  name: "Jill",
  age: 62,
  isStudent: true,
  address: {
    street: "Johor",
    city: "",
    country: "Malaysia",
  },
};

let person3: Person = {
  name: "Jill",
  age: 62,
  isStudent: true,
  address: {
    street: "Johor",
    city: "",
    country: "Malaysia",
  },
};

function displayInfo(person) { // person as parameter
  console.log(`${person.name} lives at ${person.address?.street}`);
} // person1 might be don't have an address, so we pass '?' so the program is not error 

displayInfo(person1);

// }}}
