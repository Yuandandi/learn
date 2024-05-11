const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
  let hexColor = "#"; // giving the he before random six values after
  for (let i = 0; i < 6; i++) {
    // hexColor += hex[0] // this will return 0 index which is 0 in 6 times return #000000, if we change to 10 It will return #AAAAAA
    hexColor += hex[getRandomNumber()]; // applied get random number and alphabet a-f to get a random color
  };
  
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length); 
};
