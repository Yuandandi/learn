// {{{ inline event listener
function onClear() {
    alert("clear");
}// }}}
const clearBtn = document.querySelector("#clear")
// // {{{ JavaScript Event Listener

// clearBtn.onclick = function() {
//     alert("clear item");
// };

// // }}}
// // {{{ addEventListener() method

// clearBtn.addEventListener("click", function() {
//     alert("clear items");
// });

// // }}}
// // {{{ arrow function shorter version

// // the advantage you can get as many event listener as you want
// clearBtn.addEventListener("click", () => alert("clear items"));
// clearBtn.addEventListener("click", () => console.log("clear items")); // if you do this with event listener you will only get the last operation which console only
// // the didn't do at the same time because the alert is a blocking operation (synchronous and async)

// clearBtn.addEventListener("click", onClear); // onlcer doesn't need () the function will invoke

// // }}}
// {{{ setTimeout()

// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);
// after 5000ms which 5 seconds you can no longer have click event because It has been remove

// setTimeout(() => clearBtn.click(), 5000); // fire of event after the site is fully loaded

// }}}
// {{{ Clear All the List Button

function onClear() {
    // not recommended but works (not performance)
    const itemList = document.querySelector("ul");
    // itemList.innerHTML = ``; 

    // // looping remove each list (better perfomance);
    // const items = itemList.querySelectorAll("li");
    // items.forEach(item => item.remove()); 

    // Most Performance;
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    };
}

clearBtn.addEventListener("click", onClear);

// }}};
