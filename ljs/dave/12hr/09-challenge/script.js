let myString = "developer";

// solution 1
myString = myString.charAt(0).toUpperCase() + myString.slice(1)

// solution 2
myString = myString[0].toUpperCase() + myString.slice(1);

// solution 3
myString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myString);
