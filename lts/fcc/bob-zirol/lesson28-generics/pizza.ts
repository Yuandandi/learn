const gameScores: Array<number> = [14, 21, 33, 43, 59]
const favouriteThings: string[] = ["raindrops on roses", "whishkers on kitchens", "bright coper kettles", "warm woolen mitterns"]
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

// challenge: figure out How to explicitly type the return value of the function

// most of the time They use <T> as generic type
function getLastItem<placeHolderType>(array: placeHolderType[]): placeHolderType | undefined { // undefined just incase [0] array of 0
    return array[array.length - 1]
}

// mini-challenge: call 'getLastItem' (and console.log() the restaurant the intelllisense says about the types for each one)
console.log(getLastItem(gameScores)) // 59
console.log(getLastItem(favouriteThings)) // warm woolen mitterns
console.log(getLastItem(voters)) // { name: 'Bob', age: 77 }

