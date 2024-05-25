let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0; // the number displayed is 0 but in the count is still counted so It keep the last value
  count = 0;
}

// Google:
// innerText alternative mdn
