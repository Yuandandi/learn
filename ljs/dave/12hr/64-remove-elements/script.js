// // {{{ .remove()

// function removeClearButton() {
//     document.querySelector("#clear").remove();
// };

// removeClearButton();

// // }}}
// // {{{ .removeChild()

// function removeFirstItem() {
//     const ul = document.querySelector("ul");
//     const li = document.querySelector("li:first-child");

//     ul.removeChild(li);
// };

// removeFirstItem();

// // }}};
// // {{{ .removeChild() With Passing Number Argument

// function removeItem2(itemNumber) {
//     const ul = document.querySelector("ul");
//     const li = document.querySelectorAll("li");

//     ul.removeChild(li);
// };

// removeItem(1);

// // }}};
// function removeItem2(itemNumber) {// {{{ remove the exact list number
//     const ul = document.querySelector("ul");
//     const li = document.querySelectorAll("li")[itemNumber - 1]; // 0 indexed - 1 so the user not dizzy right

//     ul.removeChild(li);
// };

// removeItem2(4);// }}}
// // {{{ Another Way Store the Index With li[Number]
// function removeItem3(itemNumber) {
//     const li = document.querySelectorAll("li"); 
//     li[itemNumber - 1].remove();
// };

// removeItem3(3);// }}}
// {{{ Shortest With Arrow Function

const removeItem4 = (itemNumber) => document.querySelectorAll("li")[itemNumber - 1].remove();

removeItem4(2);

// }}};
