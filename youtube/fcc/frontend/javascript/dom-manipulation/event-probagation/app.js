// DOM MANIPULATION

// EVENT PROPAGATION

// happened When You click the button(click) click event
window.addEventListener("click", function() {
  console.log('Window');
},false); // third parameter to choose event capture or event bubbling

document.addEventListener("click", function() {
  console.log('Document');
},false); // default is false (event bubbling) from inner most to outter most
// if You change to true it'll be event capturing (from outter most to inner most tag)

document.querySelector('.div2').addEventListener("click", function(e) {
  // e.stopPropagation(); // It will stop the probagation here
  console.log("DIV 2");
},{once: true}); // only showed the first time clicked (once properties)

document.querySelector('.div1').addEventListener("click", function() {
  console.log("DIV 1");
},false);

// document.querySelector('button').addEventListener('click', function(e) { // button tag
document.querySelector('.button').addEventListener('click', function(e) { // button class will refresh everytime will click (we set from button tag into anchor tag)
  // console.log(e)
  // console.log(e.target) // directly giving the target button tag
  e.preventDefault() // if we applied this It will no longer use anchor tag to refresh the page rahter than we will applied this Function
  console.log(e.target.innerText = "clicked!") // change inner button directly
},false);
