// document.getElementById("") is part of the DOM 
// document object model ; How You use JavaScript to modify a website
// document ; because You are interacting with .html document;
// object; the document keyword in JavaScript is of the data type object, meaning they've taken the html document and shoved It into a JavaScript object
// model ; representation or a modelation

let countEl = document.getElementById("count-el") 
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


