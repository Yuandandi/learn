let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContenttStr
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on the subway!")


// createe two variables, firstName and lastName;
let firstName = "gogon " ;
let lastName = "santoso suherman";

// concatenates the two variable into a third variables called fullname;
let fullName = firstName + lastName;

// log fullName to the console;
console.log(fullName);
