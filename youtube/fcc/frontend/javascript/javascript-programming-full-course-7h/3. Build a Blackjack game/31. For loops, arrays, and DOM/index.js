let sentence = ["Hello", "my", "name", "is", "Danzor"] 
// let sentence = ["Hello" + " " + "my" + " " + "name" + " " + "is" + " " + "Danzor"]  // you can do this but Its dry
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
  // greetingEl.textContent = sentence[i] // this will loop through out the array but it will re assign to the end of an array
  // greetingEl.textContent += sentence[i] // keep the previous content and loops again
  greetingEl.textContent += sentence[i] + " " // give a space each after the items
};
