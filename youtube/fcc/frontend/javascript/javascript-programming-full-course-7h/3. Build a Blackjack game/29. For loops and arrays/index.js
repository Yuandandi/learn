// the power of combining for loops and array

let messages = [
  "Hey, how's it going?",        
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!",
  "Great to hear",
]

// DRY - Don't repeat yourself
// console.log()
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

for (let i = 0; i < messages.length; i += 1) { // length properties will give the number of item in the array
  console.log(messages[i]); // array name and giving it's index will return loops of an item in ordered way
};
