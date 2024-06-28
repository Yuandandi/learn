// element selector
// .getElementById() method ; passing id name;
const view1 = document.getElementById("view1") // passing the id name
console.log(view1);
// .querySelector() method ; passing classname or id name, # for id, . for classname;
const view2 = document.querySelector("#view2"); // passing the id name, and # for the id or . for the class
console.log(view2);
// .style changing style;
view1.style.display = "flex";
// view1.style.display = "none";;
view2.style.display = "none";
// view2.style.display = "flex";;
// .getElementsByClassName() method ; passing classname;
const views = document.getElementsByClassName("view");
console.log(views);
// .querySelectorAll() ; method returns all elements that matches a selector, in a node lis
const divs = view1.querySelectorAll("div");
console.log(divs); // get the node list with 12 divs
// getElementsByTagName() ; method returns a collection of a child element with a given tag name, return a live HTMLCollection;
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);
// :nth-of-type() CSS pseudo-class matches elements based on their position among siblins of the same type(tag name);
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs); // select only 'odd' div numbers
// applied the odd number with the style
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue"
  // evenDivs[i].style.width = "200px";
  // evenDivs[i].style.height = "200px";
};
// .textContent ; property sets or returns the text content of the specified node, and all it's descendants;
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";
// .innerHTML ; property sets or return <th> HTML content (innerHTML) of an element
const navbar = document.querySelector("nav")
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right</p>`
console.log({ navbar }) // nav
// .justifyContent ; property alligns the flexible containers items When the items do not use all available space on the main-axis
navbar.style.justifyContent = "space-between";
// HTML DOM
console.log(evenDivs[0]); // divv number 2evenDivs is a node list of 6 div
console.log(evenDivs[0].parentElement); // section tag
console.log(evenDivs[0].parentElement.children); // 12 divs tags
console.log(evenDivs[0].parentElement.childNodes) // 25 child elements x(12 elemenst, 12 text nodes)
console.log(evenDivs[0].parentElement.lastChild) // #text ; text node
console.log(evenDivs[0].parentElement.firstChild) // #text ; text node
console.log(evenDivs[0].parentElement.firstElementChild) // first element
console.log(evenDivs[0].parentElement.lastElementChild) // last element
console.log(evenDivs[0].nextSibling) // #text ; text node in 3rd element
console.log(evenDivs[0].nextElementSibling) // div 3 ; tag div number 3
console.log(evenDivs[0].previousSibling) // #text ; text node in first element
console.log(evenDivs[0].previousElementSibling) // div 1 ; tag div number 1
// your second view style applied
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";
// .remove() ; method remove the element from the DOM;
while (view2.lastChild) { // 2nd view ; textContent
  view2.lastChild.remove(); 
}
// create 12 new div just like view1 has
const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div")
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#000"
  newDiv.style.width = "100px";
  newDiv.style.margin = "10px"
  newDiv.style.height = "100px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center"
  newDiv.style.alignItems = "center";
  parent.append(newDiv)
}

// // creating new divs with style and content above
// createDivs(view2, 10)

// looping througn new divs make 12 like the view1 has
for (let i = 1; i <= 12; i++) {
  createDivs(view2, i)
} 
