const num = [1,2,3,4,5]

const squared = num.map(function(item) {
    return item * item; })

console.log(squared);

const names = ["alice", "bob", "charlie", "danielle"];
const uppercase = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1) // capitalize the first letters
})

console.log(uppercase);


// const pokemons = ["Bulbasaur", "Charmander", "Squirtle"];
// const tags = pokemons.map((pokemon) => {
//     return `<p>${pokemon}</p>`
// })
// console.log(tags);


const pokemons = ["Bulbasaur", "Charmander", "Squirtle"];
// implicit return;
const tags = pokemons.map(pokemon => `<p>${pokemon}</p>` )
console.log(tags);
