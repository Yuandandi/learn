// {{{ insertAdjacentElement()

function insertElement() {
    const filter = document.querySelector(".filter");

    const h1 = document.createElement("h1")
    h1.textContent = 'insertAdjecentElement';

    filter.insertAdjacentElement("beforebegin", h1); // insert h1 before filter
};

insertElement();

// }}}
// {{{ insertAdjecentText()

function insertText() {
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText("afterend", "insertAdjacentText"); // afterbegin will be inside of the first box

};

insertText();

// }}};
// {{{ insertAdjacentHTML()

function insertHTML() {
    const clearBtn = document.querySelector("#clear");

    clearBtn.insertAdjacentHTML("beforebegin", '<h2>insertAdjacentHTML</h2>')
};

insertHTML();

// }}};
