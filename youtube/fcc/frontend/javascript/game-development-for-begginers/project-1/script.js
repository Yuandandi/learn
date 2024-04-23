let playerState = "sit"; // player can decide What position They want, no longer Using hardcoded, set into the default value
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function (e) {
  playerState = e.target.value;
})
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');

console.log(ctx);

// drawImage method;

const CANVAS_WIDTH = canvas.width = 600; // capital (global variable)
const CANVAS_HEIGHT = canvas.height = 600;

// builtin class constructor ; creates a new HTMLImageElement instance same as
// document.createElement('img')

// // simple block animation;
// const playerImage = new Image();
// playerImage.src = "shadow_dog.png";
// let x = 0;
// function animate() {
//   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // clearRect builtin method (coordinate 0, 0)
//   ctx.fillRect(x, 50, 100, 100); // (x, y, width, height)
//   x++;
//   requestAnimationFrame(animate); // method tells the browser You  wish to perform an animation. It request the browser to call a user-supplied callback Function before the next repaint
//   // passing Function name will run over and over looping;
// };
// // call the Function;
// animate();

// const playerImage = new Image();
// playerImage.src = "shadow_dog.png";
// const spritWidth = 575; // your spreadsheet is 6876 / 12 columns = 573
// const spritHeight = 523; // your height spreadsheet is 5230 / 10 rows = 523
// let frameX = 0;
// let frameY = 7;
// function animate() {
// ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
// ctx.fillRect(x, 50, 100, 100); 
// ctx.drawImage(playerImage, 0 , 0); // drawImage method can passing 3, 5, 9 arguments depends Your desire to control the image. (0, 0) ; means from top left of the image coordinate
// ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // 4th and 5th argument will be width and height of the image
// 9 arguments full control
// ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); d ; destination
// ctx.drawImage(playerImage, 0, 0, spritWidth, spritHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // get the exact one frame from spreadsheet
// ctx.drawImage(playerImage, 6 * spritWidth, 3 * spritHeight, spritWidth, spritHeight, 0, 0, spritWidth, spritHeight); // make in the middle of the box. number * spritWidth (next element to the right ; running). number * spritHeight (next element to the bottom ; jumping). if the number too high (more thna the number of columns or row) there will be no image
// ctx.drawImage(playerImage, frameX * spritWidth, frameY * spritHeight, spritWidth, spritHeight, 0, 0, spritWidth, spritHeight); // Using frameXY variable
// requestAnimationFrame(animate); 
// };


// const playerImage = new Image();
// playerImage.src = "shadow_dog.png";
// const spritWidth = 575; // your spreadsheet is 6876 / 12 columns = 573
// const spritHeight = 523; // your height spreadsheet is 5230 / 10 rows = 523
// let frameX = 0;
// let frameY = 3; // if You change this to 6 It will get a blink effect, since They have a blank image on a row 7, make game frame instead 
// function animate() {
//   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
//   // ctx.fillRect(x, 50, 100, 100); 
//   // ctx.drawImage(playerImage, 0 , 0); // drawImage method can passing 3, 5, 9 arguments depends Your desire to control the image. (0, 0) ; means from top left of the image coordinate
//   // ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // 4th and 5th argument will be width and height of the image
//   // 9 arguments full control
//   // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); d ; destination
//   // ctx.drawImage(playerImage, 0, 0, spritWidth, spritHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // get the exact one frame from spreadsheet
//   // ctx.drawImage(playerImage, 6 * spritWidth, 3 * spritHeight, spritWidth, spritHeight, 0, 0, spritWidth, spritHeight); // make in the middle of the box. number * spritWidth (next element to the right ; running). number * spritHeight (next element to the bottom ; jumping). if the number too high (more thna the number of columns or row) there will be no image
//   ctx.drawImage(playerImage, frameX * spritWidth, frameY * spritHeight, spritWidth, spritHeight, 0, 0, spritWidth, spritHeight); // Using frameXY variable
//   // simple looping;
//   if (frameX < 6) frameX++;
//   else frameX = 0;
//   requestAnimationFrame(animate); 
// };

// // GAME FRAME;
// const playerImage = new Image();
// playerImage.src = "shadow_dog.png";
// const spritWidth = 575; 
// const spritHeight = 523; 
// let frameX = 0;
// let frameY = 4; 
// let gameFrame = 0;
// let staggerFrames = 5; // the higher the faster, the lower the slower It will get
// function animate() {
//   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
//   let position = Math.floor(gameFrame/staggerFrames) % 11; // need gameFrame = 5 since staggerFrames = 5 to get 1 animation change, and then until It get 6 to make 0 modulus. 0 is missing dog, 1 is stopped dog, 2 is the fastest, the higher is the slower
//   frameX = spritWidth * position; // decide which frame displayed to the right
//   ctx.drawImage(playerImage, frameX, frameY * spritHeight, spritWidth, spritHeight, 0, 0, spritWidth, spritHeight); 
//   gameFrame++;
//   requestAnimationFrame(animate); 
// };
// animate();

// HOLD AN IMAGE INTO JAVASCRIPT ARRAY
// by doing this It will map each image to a particulllar spot, so that we can
// call that array;
const playerImage = new Image();
playerImage.src = "shadow_dog.png";
const spriteWidth = 575; 
const spriteHeight = 523; 
let gameFrame = 0;
const staggerFrames = 5; 
const spriteAnimations = []; // the main container to hold a data for all the animation
const animationStates = [ 
  {
    name: 'idle', 
    frames: 7, 
  },
  {
    name: 'jump', 
    frames: 7, 
  },
  {
    name: 'fall', 
    frames: 7, 
  },
  {
    name: 'run', 
    frames: 9, 
  },
  {
    name: 'dizzy', 
    frames: 11, 
  },
  {
    name: 'sit', 
    frames: 5, 
  },
  {
    name: 'roll', 
    frames: 7, 
  },
  {
    name: 'bite', 
    frames: 7, 
  },
  {
    name: 'ko', 
    frames: 12, 
  },
  {
    name: 'gethit', 
    frames: 4, 
  },
];
animationStates.forEach((state, index) => { // builtin array forEach method ; method of array instances executes a provided Function once for each array element. forEach(callbackFn, thisArg), 0 indexing
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth; // loops through the right
    let positionY = index * spriteHeight; // loops through the bottom
    frames.loc.push({x: positionX, y: positionY}); // .push() method of array instances adds the specified element to the end of an array and returns the new length of the array
  };
  spriteAnimations[state.name] = frames; // get the key value pair
}); 
console.log(animationStates);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
  let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;  // targeting sprite animation, Using hardcoded idle
  let frameX = spriteWidth * position; 
  let frameY = spriteAnimations[playerState].loc[position].y; // Using exact coordinate, You can see the DOM tree in the web console
  ctx.drawImage(playerImage, frameX, frameY, spriteWidth,  spriteHeight, 0, 0, spriteWidth, spriteHeight); 
  gameFrame++;
  requestAnimationFrame(animate); 
};
animate();
