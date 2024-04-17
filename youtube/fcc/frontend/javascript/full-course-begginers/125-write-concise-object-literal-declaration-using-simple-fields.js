// OBJECT LITERALS (ES6)

// const createPerson = (name, age, gender) => {
//   return {
//     name: name,
//     age: age,
//     gender: gender
//   }
// };

// same as the above, simple version if Your value is the same as the key
const createPerson = (name, age, gender) => ({name, age, gender});

console.log(createPerson("Zodiac Hasbro", "56", "male"));

// { name: 'Zodiac Hasbro', age: '56', gender: 'male' }

