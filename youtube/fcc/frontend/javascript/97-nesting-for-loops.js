// NESTING FOR LOOP
// for accessing multidimensional array

function multiplyAlll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) { // iterate 1*2 3*4 5*6*7
    for (var j = 0; j < arr[i].length; j++) { // iterate 2*12*310
      product *= arr[i][j];
    }
  }
  return product;
}

var product = multiplyAlll([[1,2], [3,4], [5,6,7]]); // 2 dimensional array

console.log(product);
