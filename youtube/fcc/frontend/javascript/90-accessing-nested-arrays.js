
var myPlants = [
  {
    type: "flowers",
    "list": [
      "rose",
      "tulip",
      "dandelion",
    ]
  },
  {
    type: "trees",
    "list": [
      "fir",
      "pine",
      "birch",
    ]
  }
];

// trees is the second element in the myPlants array = [1] . list is Using dot notatiton . pine is the second list elements [1]
var secondTree = myPlants[1].list[1];

console.log(secondTree); // pine

// [
//   { type: 'flowers', list: [ 'rose', 'tulip', 'dandelion' ] },
//   { type: 'trees', list: [ 'fir', 'pine', 'birch' ] }
// ]

