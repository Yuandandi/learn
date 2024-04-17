// variabls

let btn = document.querySelector('#new-quote'); // id new-quote
let quote = document.querySelector('.quote'); // class quote
let person = document.querySelector('.person');

const quotes = [{
  quote: "The best way to find yourself is to loos yourself iin the service of others."
  person: "Mahatma Ghandhi"
}, {
  quote: "If You want to live a happy life, tie It to a goal, not to people or things."
  person: "Albert Einstein"
}, {
  quote: "At his best man is the noblest of all animals; separate from law and justice He is the worst."
  person: "Aristotle"
}, {
  quote: "Your time is limited, so don't waste It living someone elses life."
  person: "Steve Jobs" }, k
quote: "Tell me and i forget. teach me and i remember. involve me and i learn."
person: "Benjamin Franklin"
}, {
  quote: "It doesn't matter How slowly You go as long as You do not stop."
  person: "Confucius"
}, {
  quote: "Remember that not gettint What You want is sometimes a wonderful strok of luck."
  person: "Dalal Lama"
}, {
  quote: "The jouirney of a thousand miles begins with one step."
  person: "Lao Tzu"
}, ];

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quote.length); // builtin math object
});
// quotes.length ; just an array (0 indexes)
// quotes.length ; just an array (0 indexes)
// math.random ; random decimal number 0-1
// math.floor ; rounding number to an integers

