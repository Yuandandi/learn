let firstCard = 14
let secondCard = 9
let sum = firstCard + secondCard

if (sum < 21) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("Woohoo! You've got Blackjack!");
  // } else if (sum > 21){ // you still need to specify condition here not like python
} else {; // alternatively do this way instead
  console.log("You're out of the game")
};
