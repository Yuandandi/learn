// // {{{ Method 1

// window.addEventListener("keydown", e => {
//     const insert = document.getElementById("insert")
//     // {{{
//     insert.innerHTML = `
//       <div class="key">
//         ${e.key === " " ? "Space" : e.key}
//         <small>e.key</small>
//       </div>

//       <div class="key">
//         ${e.keyCode}
//         <small>e.keyCode</small>
//       </div>

//       <div class="key">
//         ${e.code}
//         <small>e.Code</small>
//       </div>
//     `;
//     // space key is an empty string " " only so we need some condition
//     // }}}
// });

// // }}}
// {{{ Method 2

function showKeyCode(e) {
    const insert = document.getElementById("insert");
    insert.innerHTML = ""; // add this to clear the text before it's looping over and create more boxes

    const keyCodes = {
        "e.key": e.key === " " ? "Space" : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    }
    console.log(keyCodes) // will return and Object key valee pair
    for (let key in keyCodes) {
        const div = document.createElement("div");
        div.className = "key"
        const small = document.createElement("small");

        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);

        insert.appendChild(div);
    }
};

window.addEventListener("keydown", showKeyCode);

// }}}
