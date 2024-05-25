// const credits = 3

// if (undefined) {
//   console.log("Let's play 🎰")
// } else {
//   console.log("Sorry, you have no credits 😭")
// }

// truthy
// falsy

// you only need to remember this 6 falsy values, other than this is truetuhy value;
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// let currentViewers = null // no one is watching your stream
// currentViewers = ["jane", "nick"] // truthy value
// // currentViewers = null // null is falsy value, meaning if you add this the if statement will not be executed
// // currentViewers = []; // truthy value will be executed
// if (currentViewers) { // now the currentViewers is truthy, meaning will be execute the if statement below
//   // do something , e.g. notify the live streamers
//   console.log("we have viewers")
// }

// let currentViewers
// console.log(currentViewers); // undefined

// // undefined;
// let currentViewers = {};
// console.log(currentViewers.randomKey); // try to access key value that are not availabe will get undefined too

let currentViewers = ["james"]
console.log(currentViewers[4]); // index number 4 is not available will return undefined
