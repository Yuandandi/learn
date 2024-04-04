// LOCAL SCOPE
// only can be used insinde the function

function  myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}

myLocalScope();

// console.log(myVar); // error because It tries to use local variable, from outside the function
