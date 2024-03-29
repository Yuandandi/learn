// You can have local and global variable with the same name

var outerWear = "T-Shirt";

function  myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

console.log(myOutfit());
// tries to use global variable inside the local function is possible
// now You have new variable with the same name with global variable. You took
// the presedence and override the value

console.log(outerWear); // It still access the global variable since It applied in outside the function
