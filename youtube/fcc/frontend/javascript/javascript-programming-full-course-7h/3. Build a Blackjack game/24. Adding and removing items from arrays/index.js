let cards = [7, 4]
cards.push(6)
// console.log(cards)

// Push the newMessage to the messages array, and then log out the array

let messages = [
  "Hey, how's it going?",        
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"


messages.push(newMessage) // push method, create new items inside a created array
console.log(messages);

// let popped = messages.pop(); // if you declare into a new varaibel It will take the last item instead
// console.log(popped);

messages.pop();
console.log(messages);
