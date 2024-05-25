let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() { // nested again just to make It clear When the game started or the game currently rendering
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}


function newCard() {
  let card = 6
  sum += card
  // startGame() // semantically wrong because start game is meaning start from the start change onto something else
  renderGame(); // rendering the current state of the game
}
