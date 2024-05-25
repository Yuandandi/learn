let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function() {
  myLeads.push("www.awesomelead.com"); // When user click twice or more the array keeps expanding, well fix that later
  console.log("Button clicked!")
  console.log(myLeads);
})


