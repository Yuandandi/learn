"use strict";
// {{{ The DOM
const img = document.querySelector("img"); // interface HTMLImageElement; if we didn't specify this It assumes might be null
// const img = document.querySelector("img")!; // you can do this way too "!" (non null assertion)
const myImg = document.getElementById("image");
// const myImg = <HTMLImageElement>document.getElementById("image"); // you can do this way too, but It didn't work in .tsx file
console.log(img); // possibly null
img.src;
console.log(img.src);
myImg.src; // possibly null
// // }}}
