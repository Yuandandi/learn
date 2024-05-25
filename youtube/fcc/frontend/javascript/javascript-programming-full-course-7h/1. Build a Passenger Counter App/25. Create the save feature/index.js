// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
  count += 1
  countEl.innerText = count
}

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let countStr = count + " - ";
  // 3. Render the variable in the saveEl using innerText
  // saveEl.innerText += countStr;
  saveEl.textContent += countStr; // alternative if yor string contain "escape character" in this case is -
  // NB: Make sure to not delete the existing content of the paragraph
  console.log(count)
}

save();
