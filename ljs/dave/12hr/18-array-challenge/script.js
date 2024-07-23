const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.reverse();
arr.push(0);

console.log(arr); // [ 6, 5, 4, 3, 2, 1, 0 ]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = arr1.concat(arr2);
arr3.splice(5,1);

console.log(arr3);
