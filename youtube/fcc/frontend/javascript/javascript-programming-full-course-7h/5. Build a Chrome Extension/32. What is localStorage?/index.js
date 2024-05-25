let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

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

// What well gonna do is persisting data cross each refresh;
// localStorage.clear(); // will clear you local storage
// localStorage.setItem("foo", "https://foo.com"); // will add a new data to a local storage in a key value pair if you
// refresh It will still there
