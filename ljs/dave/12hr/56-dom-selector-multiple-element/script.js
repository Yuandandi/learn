// // {{{ querySelectorAll()

// const listItems = document.querySelectorAll(".item");
// console.log(listItems); // NodeList [] ; array like structure 
// console.log(listItems[1].innerText); // Orange Juice

// // apprised a single items;
// listItems[1].style.color = "red";

// listItems.forEach((item, index) => {
//     item.style.color = "red" // all text node list to be red

//     if (index === 1) { // remove the index 1 list
//         item.remove();
//     };

//     if (index === 0) { // index text node to be 'Oranges'
//         // item.innerText = "Oranges"; // this way will remove the x button, because the text node of <li> tags has a <button> tags innit
//         item.innerHTML = `Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>
//           `;
//     };
// });

// // }}}
// // {{{ getElementsByTagName()

// const listitems2 = document.getElementsByClassName("item")
// console.log(listitems2[2].innerText);

// const listItemsArray = Array.from(listitems2); // you need to convert the HTML collection to an array to be able loop through

// listItemsArray.forEach(item => {
//     console.log(item.innerText)
// });

// // }}};
// {{{ document.getElementsByTagName()

const listitems3 = document.getElementsByTagName("li");
console.log(listitems3[0].innerText);

// }}}
