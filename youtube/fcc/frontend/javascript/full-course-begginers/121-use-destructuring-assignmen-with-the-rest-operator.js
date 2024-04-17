// use destructuring assignment with the rest operator to reassign array elements

const SOURCE = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [ , , ...arr] = list;
  return arr;
};

const arr = removeFirstTwo(SOURCE);
console.log(arr);
console.log(SOURCE);

// arr;
[
  3, 4, 5,  6,
  7, 8, 9, 10
]

// SOURCE;
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]

