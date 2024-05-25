// player objects
let player = { // array
  name: "Per", // contains key-value pair
  chips: 200,
}

let cards = []
let sum = 0
let hasBlackJack = false // Boolean data type
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor( Math.random()*13 ) + 1 // math object
  if (randomNumber > 10) { // if else statement
    return 10 // return statement
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard] // reassign the array with items
  sum = firstCard + secondCard // sum the array
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) { // for loop
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) { // comparison operator
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
  if (isAlive === true && hasBlackJack === false) { // logical operator
    let card = getRandomCard()
    sum += card
    cards.push(card) // push the array
    renderGame()        
  }
}
