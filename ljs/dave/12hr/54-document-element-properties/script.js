let output;

// deprecated not confine;
output = document.all[0]; // HTML tag passing index of the tag
output = document.all.length; // 46 amount of items in the array

output = document.documentElement; // HTML tag and everything inside

output = document.head; // head tag
output = document.body; // body tag;

output = document.head.children; // children of head tag
output = document.body.children; // children of body tag

output = document.doctype; // doctype tag in the top
output = document.domain; // 127.0.0.1 ; domain 
output = document.URL; // domain and full links
output = document.characterSet; // UTF-8
output = document.contentType; // text/html

// output = document.forms; // HTML collection of forms
// output = document.forms[0]; // first form tag
// output = document.forms[0].id; // item-form
// output = document.forms[0].method; // get ; if we didn't set method properties default is get
// output = document.forms[0].action; // same as URL the first link

// document.forms[0].id = 'new-id'; // set the form id to new-id;

// output = document.links; // HTML collection of an array links
// output = document.links[0]; // first links appear
// output = document.links[0].href; // access href properties (links itself)
// output = document.links[0].href = 'https://facebook.com'; // reassign the href properties
// output = document.links[0].id = 'google-link'; // add new id properties
// output = document.links[0].className = "google-class"; // class of google-class 
// output = document.links[0].classList; // DOMTokenList

output = document.images; // HTMLCollection of images
output = document.images[0]; // first image
output = document.images[0].src; // source properties

// HTMLCollection is array like but it's not a real array;
// document.forms.forEach((form) => console.log(form)); // forEach() is not a function cause Its not an array
// do this way;
const forms = Array.from(document.forms);
forms.forEach(form => console.log(form)) // all the form tag

console.log(output);

