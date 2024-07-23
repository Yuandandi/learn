let output;
// {{{ Accessing Children Element

const parent = document.querySelector(".parent");

output = parent.children; // HTMLCollection

output = parent.children[1]; // second div
output = parent.children[1].innerText; // Child 2 text node
output = parent.children[1].className; // Child 2

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// console.log(output);

// }}}
// {{{ Get Parent Elements From a Child

const child = document.querySelector(".child");

output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

// console.log(child);

// }}};
// {{{ Siblings Elements

const secondItem = document.querySelector(".child:nth-child(2)"); // second item of a child class

output = secondItem; // second item
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = "green"; // third element to be green
secondItem.previousElementSibling.style.color = "orange"; // first elements siblings to be orange

console.log(output);

// }}};
