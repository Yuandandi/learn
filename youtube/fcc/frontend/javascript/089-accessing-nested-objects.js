// nested object
// we want to access sub properties with dot bracket notation

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passanger seat": "crumbs",
    },
    "outside": {
      "trunk": "jack",
    }
  }
};

// only glove box that need to use .[ notation other than that use . notation instead because It has space in It
var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);
