let output;
// {{{ childNodes

const parent = document.querySelector(".parent");

output = parent.childNodes; // HTML collection NodeList
output = parent.childNodes[0]; // whitespace textnode
output = parent.childNodes[0].textContent; // <whitespace>
output = parent.childNodes[0].nodeName; // #text
output = parent.childNodes[3]; // div tags;
output = parent.childNodes[3].textContent; // Child 1 text node
output = parent.childNodes[3].innerHTML; // same
output = parent.childNodes[3].outerHTML; //that div tag with the text node

output = parent.childNodes[3].innerText = 'Child One'; // first div tag text node
output = parent.childNodes[7].style.color = "red";

output = parent.firstChild; // white space
output = parent.lastChild; // same

parent.lastChild.textContent = "Hellow"; // last child is whitespace so It will create a text node

// }}}
// {{{ Parent Node

const child = document.querySelector(".child"); // Hellow ; textNode

output = child.parentNode; // div hellow
output = child.parentElement; // same

child.parentNode.style.backgroundColor = "#ccc"; // if you didn't specify parentNode It will colored the first div only

// }}};
// {{{ siblings

const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem.nextSibling; // \n (caret return cr)
output = secondItem.previousSibling; // same

// }}};
console.log(output);
