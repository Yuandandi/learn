// // {{{ Event Delegations Multiple Events

// const listItems = document.querySelectorAll("li");

// listItems.forEach(item => {
//     item.addEventListener("click", e => {
//         // console.log(e.target) // clicked <li> tags
//         e.target.remove(); // remove the targeted list, after we refresh the data comeback because it's not persisting data yet
//     })
// });

// // }}}

// {{{ event delegation

const list = document.querySelector("ul"); 

list.addEventListener("click", function (e) {
    // console.log(e.target); // even in the <ul> tag we can access <li> tag
    if (e.target.tagName === "LI") { // LI should be UPPERCASE, because the <li> in HTML is case insensitive so the DOM API Using UPPERCASE to avoid confusion
        e.target.remove();
    };
});

list.addEventListener("mouseover", function (e) {
    // console.log(e.target); // even in the <ul> tag we can access <li> tag
    if (e.target.tagName === "LI") { // LI should be UPPERCASE, because the <li> in HTML is case insensitive so the DOM API Using UPPERCASE to avoid confusion
        e.target.style.color = "red"
    };
});

// }}};
