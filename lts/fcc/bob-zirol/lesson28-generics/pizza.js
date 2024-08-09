"use strict";
const gameScores = [14, 21, 33, 43, 59];
const favouriteThings = ["raindrops on roses", "whishkers on kitchens", "bright coper kettles", "warm woolen mitterns"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }];
// most of the time They use <T> as generic type
function getLastItem(array) {
    return array[array.length - 1];
}
// mini-challenge: call 'getLastItem' (and console.log() the restaurant the intelllisense says about the types for each one)
console.log(getLastItem(gameScores)); // 59
console.log(getLastItem(favouriteThings)); // 59
console.log(getLastItem(voters)); // 59
