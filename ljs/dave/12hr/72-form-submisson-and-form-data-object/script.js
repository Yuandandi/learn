const form = document.getElementById("item-form");

// Using .value;{{{
function onSubmit(e) {
    // without this It will only flash and submit into the site, and the console is not seen in console
    e.preventDefault(); // console.log("submit");

    const item = document.getElementById("item-input").value;
    const priority = document.getElementById("priority-input").value;

    // condition input "" no character and not selecting the priority number;
    if (item === "" || priority === '0') {
        alert("Please fill in all fields");
        return; // after alert no console bellow appear
    };

    console.log(item, priority);
    // console.log(item, priority.value); // works the same

}// }}}
// {{{  FormData() Object

function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form); // pay attention to case FormData

    // // get the item name and the priorities{{{
    // const item = formData.get("item");
    // const priority = formData.get("priority");
    // console.log(item, priority);// }}}

    const entries = formData.entries();
    // console.log(entries); // FormData iterator {} (Object) ; allow us to loop through we'll use for loop

    for (let entry of entries) {
        // console.log(entry); // array Object of (time and priority)
        console.log(entry[1]); // only the value user choose
    };
}

// }}}

form.addEventListener("submit", onSubmit)
form.addEventListener("submit", onSubmit2)
