// {{{ createElement() appendChild()

// this div won't showed up in the browser only store in the memory process variable;
const div = document.createElement("div");

div.className = "my-className";
div.id = 'my-id';
div.setAttribute('title', 'My title');

// div.innerText = 'Hello world'; // not the best practice

const text = document.createTextNode("Hello world");
// div.appendChild(text); // put the text inside the div variable

// document.body.appendChild(div); // the ending of the body tag

document.querySelector("ul").appendChild(div);

// }}}
// {{{ clean and performant

function createListItem(item) {
    // const li = `<li>${item}</li>`; // TypeError appendChild on node
    const li = document.createElement("li");

    li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        `;

    document.querySelector(".items").appendChild(li);
};


// clean & performant;
function createNewItem(item) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));

    const button = document.createElement("button");
    button.className = "remove-item btn-link text-red";

    const icon = document.createElement("i");
    icon.className="fa-solid fa-xmarx";

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector(".items").appendChild(li);
};

createListItem('Eggs');
createNewItem("Cheese");

// }}};
