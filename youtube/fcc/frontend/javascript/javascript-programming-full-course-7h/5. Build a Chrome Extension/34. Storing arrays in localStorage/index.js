// ********** STRING TO ARRAY **********
let myLeads = `["www.awesomelead.com"]` // string
// change to array first;
myLeads = JSON.parse(myLeads);
myLeads.push("www.epiclead.com") // push method doesn't exist on "string
console.log(myLeads);

// // ********** ARRAY TO STRING **********
// let myLeads = ["www.awesomelead.com"];
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads); // check the type of the "variable

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// window.localStorage.setItem("myName", "Danzor")
// let name = window.localStorage.getItem("myName")
// window.localStorage.clear()
// console.log(name);
// console.log(myLeads)

// JSON.stringify(); // takes the array and truns into a string
// from string to array;


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
})

function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
  }
  ulEl.innerHTML = listItems  
}
