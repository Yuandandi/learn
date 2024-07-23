// {{{ The Event Object
const logo = document.querySelector("img")

logo.addEventListener("click", function (e) {
    // console.log(e); // event Object with all the properties and methods on It
    // console.log(e.target); // that image tag
    // console.log(e.currentTarget); // same as above

    e.target.style.backgroundColor = "black";
});

document.body.addEventListener("click", function(e) {
    // console.log(e.target); // will appear the target you clicked
    // console.log(e.currentTarget); // will only appear <body> tag
    // console.log(e.type); // click
    // console.log(e.timeStamp);

    // relative to the page (from the top left);
    // console.log(e.clientX); // horizontal (left to right)
    // console.log(e.clientY); // vertical (top to bottom)

    // relative to the selected selector;
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // relative to the page (responsive) increase or decrees page will affect the coordinates
    // console.log(e.pageX);
    // console.log(e.pageY);

    // from the entire monitor
    console.log(e.screenX);
    console.log(e.screenY);

});
// }}}
// // {{{ preventDefault() method

// document.querySelector("a").addEventListener("click", function(e) {
//     e.preventDefault(); // will prevent behavior
//     console.log("Link Was Clicked");
// });

// // }}}
// {{{ draga event

function onDrag(e) {
    document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener("drag", onDrag);

// }}};
