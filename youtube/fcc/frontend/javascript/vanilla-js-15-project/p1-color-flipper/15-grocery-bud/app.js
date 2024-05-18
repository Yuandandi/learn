// select items

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option;
let editElement;
let editFlag = false;
let editID = "";

// ********** EVENT LISTENERS **********
// submit form;
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
// window.addEventListener("DOMContentLoaded", setupItems);

// ********** functions **********

// add item
function addItem(e) {
  e.preventDefault(); // the default is They trying to submit a value
  // console.log(grocery.value); // whatever user input will be printed
  const value = grocery.value;
  const id = new Date().getTime().toString(); // print in milliseconds and format into string

  if (value !== "" && !editFlag) { // JavaScript is truthy and falsy value
    // console.log('add item to the list');
    const element = document.createElement("article");
    // add id;
    let attr = document.createAttribute("data-id");
    attr.value = id;
    // add class;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
      `;
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // ********** GIVING THE FUNCTION NAME **********
    // append child;
    list.appendChild(element);
    // display alert;
    displayAlert("item added to the list", "success");
    // show container;
    container.classList.add("show-container");
    // add to local storage;
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    // edit local stoorage;
    editLocalStorage(editID, value); // after get the title and assined It to input, You can assigned It to something else and It change too from the list
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger")
  }
};

// display alert
function displayAlert(text, action) { // either danger or success will be displayed
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert;
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000); // within 1 seconds alert will be gone
}

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) { // if It has an item then remove It
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger"); // When click remove It will display this danger pop-up
  setBackToDefault();
};

// ********** INVOKE THE FUNCTION **********

// delete Function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement; // get the grocery eleement
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}

// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling; // accessing button container and then looking for a title
  // set form value
  grocery.value = editElement.innerHTML; // get the title value and put into the text input
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit"; // change into edit mode and (remove into edit button)
}
// set back to defaults
function setBackToDefault() {
  grocery.value = ""; // after enter remove the text that has been submitted
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ********** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  // const grocery = {id:id, value:value}; 
  const grocery = {id, value};  // shorthand version ES6 if id and value are the same name
};

function removeFromLocalStorage(id) { };
function editLocalStorage(id, value) { };

// localstorage API
// setItem
// getItem
// removeItem
// save as strings

localstorage.setItem("orange", JSON.stringify(["item", "item2"])); // save array as a string in local storage 
const oranges = JSON.parse(localstorage.getItem("orange")) // parsing When we want to get the value back
localstorage.removeItem("orange");
