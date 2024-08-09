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
  address: Address;
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: "balaikota",
    city: "Jakarta",
    country: "Indonesia",
  },
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

// }}}
