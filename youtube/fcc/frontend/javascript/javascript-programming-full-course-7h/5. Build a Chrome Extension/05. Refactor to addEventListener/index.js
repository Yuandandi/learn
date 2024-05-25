// function saveLead() {
//     console.log("Button clicked!")
// }

let inputBtn = document.getElementById("input-btn")

// better to store any event listener onto your JavaScript pile;
inputBtn.addEventListener("click", function () {
  console.log("Button clicked from addEventListener()");
});
