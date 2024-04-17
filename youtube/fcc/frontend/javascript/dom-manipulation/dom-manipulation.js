// DOM manipulation

// PARENT NODE TRAVERSAL;

// ul selector;
// let ul = document.querySelector('ul');
// console.log(ul);

// let ul = document.querySelector('ul');
// console.log(ul.parentNode); // select parent node of ul which is div
// console.log(ul.parentElement); // select parent element of ul which is div

// let ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode); // parents of parents which is grandma body tag
// console.log(ul.parentElement.parentElement); // grandpa body

// PARENTNODE PARENTELEMENT DIFFERENCE (traverse up)

// const html = document.documentElement;;
// console.log(html.parentNode); // common use, the top most is document
// console.log(html.parentElement); // can be null, It didn't know What are the top of html tag

// CHILD NODES TRAVERSAL

// // it's giving 11 list for a proper indentation, if You messed the indentaton, joining 2 lisst tag at one line it'll be 10 nodes;
// let ul = document.querySelector('ul');
// console.log(ul.childNodes); // returns child nodes with 11 list items
// console.log(ul.firstChild); // returns textnodes
// console.log(ul.lastChild); // returns textnodes

// let ul = document.querySelector('ul');
// ul.childNodes.style.backgroundColor = "blue"; // didn't work becouse this is text node
// ul.childNodes.style.backgroundColor = "blue"; // 0 indexing so You need to use index number 1 to applied the first list
// ul.childNodes[1].style.backgroundColor = "blue";

// let ul = document.querySelector('ul');
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// let ul = document.querySelector('ul');
// const div = document.querySelector('div'); 
// console.log(div.childNodes); // this is why They got the text node (before and after ul is "text")
// console.log(ul.previousSibling); // get the text nodes
// console.log(ul.nextSibling); // get the text nodes

let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(ul.previousElementSibling); // h1
console.log(ul.nextElementSibling); // null
