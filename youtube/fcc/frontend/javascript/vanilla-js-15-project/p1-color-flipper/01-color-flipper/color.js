const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color'); // fun fact class selector is not case sensitive

btn.addEventListener('click', function() {
  // get random number between 0-3;
  // const randomNumber = 2; // this will return colors index number 2 which is rgba(133, 122, 200)
  const randomNumber = getRandomNumber();
  console.log(randomNumber); 
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  // return Math.random(); // Math.round() will return number between 0 - 1 in decimal point (except 0 and 1)
  // return Math.random() * colors.length; // * 4
  return Math.floor(Math.random() * colors.length); // Math.floor() will round to the closest integer so It will return between 0 - 3 (get the colors index)
};
