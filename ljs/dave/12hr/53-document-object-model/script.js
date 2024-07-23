// 'window' ; Global Scope Top Most Object

console.log(window) // see all the window Object properties
console.log(window.document); // show the element
console.dir(window.document); // methods and properties

console.log(document);
// you can remove the 'window' Object, because It the top most level Object to shorten;

console.log(document.body); // body tag and all the properties
console.log(document.body.innerHTML); // only HTML in the body
console.log(document.body.innerText); // only text node
console.log(document.links[0]); // show the first links appear

document.body.innerHTML = '<h1>Hello world</h1>'; // replace everything in the body with this tag and text node
console.log(document.links[0]); // now we can't access the links

document.write("Hello from JS"); // write text at the end of a page, it's living under the script tag

console.log(document.getElementById("main")); // element selector 'main' id

const main = document.getElementById("main"); // store into variable 'main'
main.innerHTML = '<h1>Hello from main</h1>' // replace the everything in 'main' id text node inside

document.querySelector("#main "); // querySelector ; you can choose '# for id' or " . for class" 


