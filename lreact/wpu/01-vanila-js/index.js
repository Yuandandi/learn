const app = document.getElementById("app")
const header = document.createElement("h1")
const headerContent = document.createTextNode("Belajar react aja")

header.appendChild(headerContent)
app.appendChild(header)

// JavaScript is imperative code;

// this is why JavaScript is so long to code
// select the element
// create new element
// create text node
// applied to the DOM sequentially

// library like react is declarative code
// tell What element you want to create and let the computer do the rest
