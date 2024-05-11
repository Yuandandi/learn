// set initial count

let count = 0;

// select value and buttons
const value = document.querySelector('#value'); // # is the id notation
const btns = document.querySelectorAll('.btn'); // .is the class notation, because It has more than one selector we need to use selectorAll() method

// console.log(btns) // will return node lists

// // will return every button;
// btns.forEach(function (item) { // You can change the parameter anything You like preferably has a context
//   console.log(item);
// })

// forEach() method to loops through the button, and callback Function to give specific needs each buttons;
btns.forEach(function (btn) {
  btn.addEventListener('click', function(e) { // addEventListener('') method of the EventTarget interface sets up a Function that Will called whenever the specified event is delivered
    // console.log(e.currentTarget); // currentTarget ; properties that read-only of ht event interface identifies the element to which the event handler has been attached, in here Using click event so It will return which button has been clicked
    const styles = e.currentTarget.classList; // get the all the classList this element has, now hold into a const variable
    if (styles.contains('decrease')) {
      count--;
    } 
    else if (styles.contains('increase')) {
      count++;
    } else { // reset button
      count = 0;
    };
    if (count > 0) {
      value.style.color = "green";
    };
    if (count < 0) {
      value.style.color = "red";
    };
    if (count == 0) {
      value.style.color = "#222";
    };
    value.textContent = count;
  });
});
