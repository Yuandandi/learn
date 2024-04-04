
function randomRanger(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

var myRandom = randomRanger(5, 15);
console.log(myRandom);
