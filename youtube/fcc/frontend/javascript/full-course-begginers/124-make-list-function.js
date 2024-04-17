const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"], // each list contains an array
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dupkeys"]
}

function makeList(arr) {
  const resultDisplayArray = []; // placeholder for resultDisplayArray
  for (let i = 0; i < arr.length; i++) { // for loop iterate each list of key value pair, with length specified and increment
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`); // append the with push Function
  };
  return resultDisplayArray;
};

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)

// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]
