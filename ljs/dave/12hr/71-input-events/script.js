// {{{ Variables
const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");
// }}}
// {{{ Functions
function onInput(e) {
    // console.log(e.target.value) // everytime you type It appends (the entire input)
    heading.textContent = e.target.value; // change text h1 in realtime
}
function onChecked(e) {
    // console.log(e.target.checked); // boolean checked or not
    // h1 into checked or not checked textNode (not boolean anymore)
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? "Checked" : "Not Checked";
}

function onFocus() {// When you want specific outline
    console.log("input is focused");
    // applied some style so your page is dynamically styled;
    itemInput.style.outlineStyle = "solid";
    itemInput.style.outlineWidth = "1px";
    itemInput.style.outlineColor = "red";
}
function onBlur() {
    console.log("input is not focused");
};// }}}
// {{{ 'input' and 'change' event
// itemInput.addEventListener("keydown", onInput);
itemInput.addEventListener("input", onInput); // better to use 'input'
// priorityInput.addEventListener("input", onInput); // h1 will change to the chosen items
priorityInput.addEventListener("change", onInput); // same as above 
checkbox.addEventListener("input", onChecked);// }}}
// {{{ focus and blur event
// focus on itemInput meaning When you click the input fields;
// blur on itemInput meaning When you click outside the input fields after click the input fields;
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);// }}}
