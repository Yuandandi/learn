// BLACKJACK CARD COUNTING FUNCTION

// whey You see a low card, the count goes up.
// and When You see high card, the count goes down.
// and if it's a middle value card, the count stays the same.
// and then When the count is positive the player should bet high.
// and When the count is a zero or negative the player should bet low

var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++; // if the number is low You need to increase
      break;
      // case 7: 789 will do nothing so better to go next
      // case 8:
      // case 9:
    case 10:
    case "J":
    case "Q":
    case "K":
      count--; // the number is high You need to decrement
      break;
  }
  // return wether we are going to hold or bet;
  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet"
  }
  return count + " " + holdbet;
}

cc(3); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));
