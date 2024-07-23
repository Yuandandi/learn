// {{{ First Challenge

const people = [// {{{
    {
        firstNmae: "John",
        lastName: "Doe",
        email: "john@gmail.com",
        phone: "111-111-111",
        age: 30
    },
    {
        firstNmae: "Jane",
        lastName: "Poe",
        email: "jane@gmail.com",
        phone: "222-222-222",
        age: 25
    },
    {
        firstNmae: "Bob",
        lastName: "Foe",
        email: "bob@gmail.com",
        phone: "333-333-333",
        age: 45
    },
    {
        firstNmae: "Sara",
        lastName: "Soe",
        email: "sara@gmail.com",
        phone: "444-444-444",
        age: 18
    },
]// }}}

const youngPeople = people
    .filter(person => person.age <= 25)
    .map(person => ({
        name: `${person.firstNmae} ${person.lastName}`,
        email: person.email,
    }));

console.log(youngPeople);

//  }}}
// {{{ Second Challenge

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positieveSum = numbers
    .filter(numbers => numbers > 0)
    .reduce((prev, cur) => prev + cur, 0);

console.log(positieveSum); // 79

//  }}};
// {{{ Third Challenge

// uppercase each first letter in the array;
const words = ["coder", "programmer", "developer"];

const cWords = words.map(word => {
    return word[0].toUpperCase() + word.slice(1); // uppercase the first letter and add the rest number
});

console.log(cWords);

//  }}};
