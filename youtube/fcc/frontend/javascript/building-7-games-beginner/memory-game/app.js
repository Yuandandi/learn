document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [ // array
    { // object
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    { 
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    { 
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    { 
      name: 'pizza',
      img: 'images/pizza.png',
    },
    { 
      name: 'fries',
      img: 'images/fries.png',
    },
    { 
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    { 
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    { 
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    { 
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    { 
      name: "pizza",
      img: "images/pizza.png",
    },
  ]

  cardArray.sort(() => .5 - Math.random()) // shortcut sort an array randomly

  const grid = document.querySelector("#grid");
  let cardsChoosen = [];
  let cardsChoosenId = [];
  const resultDisplay = document.querySelector("#result")
  const cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img")
      // console.log(card, i); // image tag and its index
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.append(card);
    } 
  }


  function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChoosenId[0];
    const optionTwoId = cardsChoosenId[1];

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChoosen[0] === cardsChoosen[1]) {
      alert("You found a match");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChoosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png")
      cards[optionTwoId].setAttribute("src", "images/blank.png")
      alert("Sorry try again!");
    }

    resultDisplay.textContent = cardsWon.length
    cardsChoosen = []
    cardsChoosenId = []

    if (cardsWon.length === cards.length / 2) {
      resultDisplay.textContent = "Congratulation you found them all";
    }

  }


  function flipCard() {
    const cardId = this.getAttribute("data-id") // "this"; use whatever element we clicked and gets it's attribute;
    cardsChoosen.push(cardArray[cardId].name); // push to an empty array
    // console.log("clicked", cardId)
    // console.log(cardsChoosen)
    this.setAttribute("src", cardArray[cardId].img); // image applied change When user clicked
    if (cardsChoosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  };

  createBoard();
})
