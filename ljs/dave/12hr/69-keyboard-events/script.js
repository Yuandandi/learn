const itemInput = document.getElementById("item-input")
// const onKeyPress = e => {// {{{
//     console.log("keypress");
// };// }}}
// const onKeyUp = e => {// {{{
//     console.log("keypress");
// };// }}}
const onKeyDown = e => {// {{{
    // console.log("keypress");

    // // {{{ key;
    // console.log(e.key); // console each character you press one by one
    // // document.querySelector("h1").innerText = e.key; // replace the textContent of h1 with keys you press

    // // if (e.key === "Enter") { // the case should be right can't do 'enter'
    // //     alert("You pressed enter");
    // // };

    // // }}};
    // {{{ Keycode ; the Actual Number of Keycode
    // https://www.toptal.com/developers/keycode/table;

    if (e.keycode === 13) { // 13 is keycode of "Enter"
        alert("You pressed enter");
    };

    // }}};
    // {{{ code

    if (e.code === "Digit1") { // 1
        console.log("You pressed 1");
    };

    if (e.repeat) { // holding keys
        console.log("you are holding down " + e.key + " keys");
    };

    // if shift true if not false
    console.log("Shift: " + e.shiftKey); 
    console.log("Control: " + e.ctrlKey);
    console.log("Alt: " + e.altKey);

    if (e.shiftKey && e.key === "K") {
        console.log("You hit shift + k");
    };

    // }}};

};// }}}
// {{{ key event
// press any input character; (excpet backspace F1-12)
// itemInput.addEventListener("keypress", onKeyPress);
// itemInput.addEventListener("keyup", onKeyUp); // When we release the keys after hold for a second
itemInput.addEventListener("keydown", onKeyDown); // When we pressing the keys, if we hold It It will continously called}}}
