// EVENT LISTENERS

// CLICK EVENT;
const buttonTwo = document.querySelector('.btn-2');
// callback function;
function alertBtn() {
  alert("I also love JavaScript");
};
buttonTwo.addEventListener("click", alertBtn);

// MOUSE OVER;
const newBackgorundColor = document.querySelector('box-3');
function changeBgColor() {
  newBackgorundColor.style.backgroundColor = 'blue';
};
newBackgorundColor.addEventListener("mouseover", changeBgColor);
