// STYLING WITH JAVASCRIPT 

// INLINE STYLING;

// const judul = document.querySelector('#main-heading'); // id Using # sign
// judul.style.color = 'red'; // variable.style.ANY-PROERTIES
// console.log(judul);

// STYLING ELEMENT WITH LOOPING;

const listItems = document.querySelectorAll('.list-items') // class Using . notation .list-items
// listItems.style.fontSize = '2rem'; // in CSS font-size in JavaScript fontSize
// (camel case) You can't do multiple selector with inline style, do with for
// loop instead

// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "3rem"
// }

console.log(listItems);

// CREATING ELEMENT;

const ul = document.querySelector('ul');
const li = document.createElement('li');

// ADDING ELEMENT;

ul.append(li);

// MODIFYING TEXT;

const firstListItems = document.querySelector('.list-items');

// danger to be applied in html (security issues);
console.log(firstListItems.innerText); // display only the text inside the tag
console.log(firstListItems.textContent); // display with the content tag (not including the tag)
console.log(firstListItems.innerHTML); // tag, text, and indentation (exactly written in .html file)

// MODIFYING THE TEXT;

li.innerText = 'X-men'; // only applied in the empty created list

// MODIFYING ATTRIBUTES & CLASSES;

// li.setAttribute('id', 'main-heading'); // (attribute, attribute-name) id="main-heading"
// li.removeAttribute('id');

// const titles = document.querySelector('main-heading');
// console.log(titles.getAttributes('id'));

// li.classList.remove('list-items');
// li.classList.add('list-items');

li.classList.add('list-items') // true
li.classList.remove('list-items') // false

console.log(li.classList.contains('list-items'));

// REMOVE ELEMENTS;

li.remove();
