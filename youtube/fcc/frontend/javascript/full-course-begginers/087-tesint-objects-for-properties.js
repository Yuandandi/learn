// check an object has a properties or not
var myObj = {
  pet: "kitten",
  gift: "pony",
  bed: "sleigh",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) { // .hasOwnProperty() method object instances return a Boolean indicating wehter or not has specified properties as It own properties
    return  myObj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj("pet")); // kitten
console.log(checkObj("foo")); // undefined
