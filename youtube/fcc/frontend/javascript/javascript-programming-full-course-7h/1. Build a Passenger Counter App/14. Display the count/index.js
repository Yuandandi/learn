// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

// variable Using cammelCase, You can't use dais "-";

let countEl = document.getElementById("count-el"); // pass in argument

let count = 0;

function increment() {
  count = count + 1
  countEl.innerHTML = count;
};

increment();
