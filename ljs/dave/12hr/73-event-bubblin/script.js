// {{{ Event Bubbling
// the event is first captured and handled by the innermost element and then propagated to outer element

const button = document.querySelector("form button"); // button in a form tag
const secondDiv = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", () => {
    alert("Button was clicked")
});

secondDiv.addEventListener("click", () => {
    alert("secondDiv was clicked")
});

form.addEventListener("click", (e) => {
    alert("form was clicked") // form was clicked => body was clicked ; innermost to outermost
    e.stopPropagation(); // if we add this only the innermost runs
});

document.body.addEventListener("click", () => {
    alert("body was clicked")
});

// }}}
