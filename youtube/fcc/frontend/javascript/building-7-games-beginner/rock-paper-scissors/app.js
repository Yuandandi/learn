const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => addEventListener("click", (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); // you can user possibleChoices.length to access the number of button as a choice, now we just hardcoded It

  if (randomNumber === 0) {
    computerChoice = "rock";
  }
  if (randomNumber === 1) {
    computerChoice = "scissors";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw"
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You loose"
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You loose"
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win"
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win"
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You loose"
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win"
  }
  resultDisplay.innerHTML = result;
};
