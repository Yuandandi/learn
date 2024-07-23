// {{{ variable
const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = document.querySelectorAll("li");
// }}}
function run() {// {{{
    // className;
    // console.log(itemList.className); //item-list items
    // text.className = "dark";

    // classList;
    // console.log(itemList.classList); // a single class

    itemList.classList.forEach(c => console.log(c)); // class
    
    // text.classList.add("dark"); // add new classlist 'dark'
    // text.classList.remove("card"); // remove the 'card' class

    // text.classList.toggle('dark'); // toggles on and off dark or light mode
    // text.classList.toggle('hidden'); // toggle on and off the paragraph
    // text.classList.replace("card", "dark"); // replace to dark

    // Change Styles;
    // itemList.style.lineHeight = '3';

    items.forEach((item, index) => { // change every list into red color
        item.style.color = "red";
        if (index === 2) {
            item.style.color = "blue"; // only 3rd list applied
        };
    });

}// }}}

document.querySelector("button").onclick = run; // no need run()
