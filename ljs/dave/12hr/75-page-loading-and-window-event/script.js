// {{{ if you put <script> tags inside the <head> tag you need this (best practice in back 2000's)

// // .onload( t)  ; withing for the entire page to load (include resources like images and so on){{{
// window.onload = function () {
//     document.querySelector("h1").textContent = "Hello world";
// };// }}}

// // another way;
// window.addEventListener("load", () => document.querySelector("h1").textContent = "Hello world");

// runs as soon as the DOM is parsed and loaded;
window.addEventListener("DOMContentLoaded", () => document.querySelector("h1").textContent = "Hello world");

// }}}
// {{{ DOM sequence

window.addEventListener("load", () => console.log("Page Loaded")); // third
window.addEventListener("DOMContentLoaded", () => console.log("DOM Loaded")); // second

console.log("Run me"); // first

// }}};
// // {{{ resize event listener

// window.addEventListener("resize", () => {
//     document.querySelector("h1").innerText = `Resize to ${window.innerWidth} x ${window.innerHeight}`
// });

// // }}};
// {{{ 'scroll' event
window.addEventListener("scroll", () => {
    document.querySelector("h1").innerText = `Scrolled to ${window.scrollX} x ${window.scrollY}`

    // make It dynamic;
    if (window.scrollY > 70) { // toggle 70px more or less to balck and white
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    };
});
// }}}
// if your script inside the <head> tags and you specified "defer" you don't need all of this, because It will wait till all the content fully loaded than run the scripts
