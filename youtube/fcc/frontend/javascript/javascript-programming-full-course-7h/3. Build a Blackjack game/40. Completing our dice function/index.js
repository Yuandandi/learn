// Try to modify the expression so that we get a range from 1 to 6
// let randomNumber = Math.floor( Math.random() * 6 ) + 1 // just add + 1 at the end

// console.log(randomNumber)

// create a funcion, rollDice(), that returns a random number between 1 and 6

function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1
  return randomNumber;
};

console.log(rollDice())
