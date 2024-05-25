let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
  // ulEl.textContent += myLeads[i] + " "
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"; // giving a context that It is not just a string but also html tag ; crate html element with JavaScript
}

