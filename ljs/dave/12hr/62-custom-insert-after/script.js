function insertAfter(newEl, existingEl) {
    // console.log(existingEl.parentElement); // <ul> ; parent element of <li>
    // console.log(existingEl.parentNode); // same
    // existingEl.parentElement.insertBefore(newEl, existingEl); // before the apples list
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling); // after the apples list
}

const li = document.createElement("li");
li.textContent = "Insert Me After!";

const firstItem = document.querySelector("li:first-child");

insertAfter(li, firstItem);
