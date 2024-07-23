// {{{ document.getElementById()

console.log(document.getElementById("app-title")); // tag
console.log(document.getElementById("app-title").id); // app-title ; id properties
console.log(document.getElementById("app-title").className); // the porperty is 'className' not 'class'
console.log(document.getElementById("app-title").getAttribute("id"));

// }}}
// {{{ Set Attributes

document.getElementById("app-title").title = 'shopping list'; // change title properties, if you hover the 'shopping list text h1 will title properties, if you hover the display a 'shopping list text''
document.getElementById("app-title").setAttribute("class", "title"); // change the class='title'

// }}};
// {{{ Store the Selector to the Variable

const title = document.getElementById("app-title");

// console.log(title.textContent); // get/change content
title.textContent = 'Hello world'; // change text node
title.innerText = 'Hello again'; // same
title.innerHTML = '<strong>Shopping List</strong>';

// }}}
// {{{ Change Styles

// we don't use this for static site, we applied this When we want the interactive effect JavaScript can offer
title.style.color = "red";
title.style.backgroundColor = 'black' // in CSS format is background-color a bit different with js use camel

// }}}
// {{{ document.querySelector()

// the advantage of Using querySelector is we can select tags that has no id="" or class=""

console.log(document.querySelector("h1")); // select the first <h1></h1> element
console.log(document.querySelector("#app-title")); // # id
console.log(document.querySelector(".container")); // . class
console.log(document.querySelector("input[type=text]")); // input type='text'
console.log(document.querySelector("li:nth-child(2)").innerText) // Orange Juice

const secondItem = document.querySelector("li:nth-child(2)");
const thirdItem = document.querySelector("li:nth-child(3)");
secondItem.innerText = 'Apple Juice'
secondItem.style.color = "red"
thirdItem.innerText = 'Doritos'
thirdItem.style.color = "orange"

// }}}
// {{{ Use These Methods on Other Elements

const list = document.querySelector("ul");
console.log(list);
const firstList = list.querySelector("li"); // the first list
firstList.style.color = "blue";

// }}}
