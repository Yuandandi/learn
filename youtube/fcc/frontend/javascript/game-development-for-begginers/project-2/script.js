      // FIRST LAYER BACKGROUND

// const canvas = document.getElementById('canvas1')
// const ctx = canvas.getContext('2d'); // getContext() method returns a drawing context on the canvas, or null if the content identifier is not supported, or the canvas has already been set to a different context mode, 2d ; leading  to the creation of a CanvasRenderingContext2D object representing a two-dimensional rendering context
// const CANVAS_WIDTH = canvas.width = 800; // 800 700 same as the canvas CSS canvas1, the default is 300x300px
// const CANVAS_HEIGHT = canvas.height = 700;
// let gameSpeed = 15;

// // let x = 0; // add this to the x coordinate variable to see the movement

// // ADD ALL THE IMAGE FILE ;
// const backgorundLayer1 = new Image(); // builtin image class constructor ; create an image element ; crate <img> in html ; image constructor has the same functionality as document.createElement('img')
// backgorundLayer1.src = './image/layer-1.png'; // giving source properties, if it's not it's blank
// const backgorundLayer2 = new Image();
// backgorundLayer2.src = './image/layer-2.png';
// const backgorundLayer3 = new Image();
// backgorundLayer3.src = './image/layer-3.png';
// const backgorundLayer4 = new Image();
// backgorundLayer4.src = './image/layer-4.png';
// const backgorundLayer5 = new Image();
// backgorundLayer5.src = './image/layer-5.png';

// let x = 0;
// let x2 = 2400;

// // ANIMATION LOOPS
// function animate() {
//   // ctx.drawImage(backgorundLayer2, 0, 0) // now It seems like static image but It actually It runs over and over
//   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // remove the previous frames so It will seemed properly giving 4 arguments(x, y, width, height) ; we only the current animation frames
//   ctx.drawImage(backgorundLayer5, x2, 0);
//   ctx.drawImage(backgorundLayer5, x, 0) // now It seems moving to the left with x = 0 and x-- ; It happens because we still see the previous frames
//   // these two lines will make It looping the image to the first pixel;
//   // if (x < -1600) x = 0; // the problem is It still junk the image and not playable
//   // if (x < -2400) x = 2400; // now we have 2400px wide scrolling endlessly
//   if (x < -2400) x = 2400 + x2 - gameSpeed;  // - gameSpeed make the gap smaller
//   else x -= gameSpeed;
//   // if (x2 < -2400) x2 = 2400; 
//   if (x2 < -2400) x2 = 2400 + x - gameSpeed;  // +x and +x2 remove the gap
//   else x2 -= gameSpeed;
//   // x--; // if It change to x++ It will move to the right
//   // x -= gameSpeed; // x = x - gameSpeed so increase the gameSpeed will move faster
//   requestAnimationFrame(animate); // builtin requestAnimationFrame function, passing the Function name to make It loop
// }
// animate();

      // FIRST LAYER BACKGROUND

// const canvas = document.getElementById('canvas1')
// const ctx = canvas.getContext('2d'); // getContext() method returns a drawing context on the canvas, or null if the content identifier is not supported, or the canvas has already been set to a different context mode, 2d ; leading  to the creation of a CanvasRenderingContext2D object representing a two-dimensional rendering context
// const CANVAS_WIDTH = canvas.width = 800; // 800 700 same as the canvas CSS canvas1, the default is 300x300px
// const CANVAS_HEIGHT = canvas.height = 700;
// let gameSpeed = 15;

// // let x = 0; // add this to the x coordinate variable to see the movement

// // ADD ALL THE IMAGE FILE ;
// const backgorundLayer1 = new Image(); // builtin image class constructor ; create an image element ; crate <img> in html ; image constructor has the same functionality as document.createElement('img')
// backgorundLayer1.src = './image/layer-1.png'; // giving source properties, if it's not it's blank
// const backgorundLayer2 = new Image();
// backgorundLayer2.src = './image/layer-2.png';
// const backgorundLayer3 = new Image();
// backgorundLayer3.src = './image/layer-3.png';
// const backgorundLayer4 = new Image();
// backgorundLayer4.src = './image/layer-4.png';
// const backgorundLayer5 = new Image();
// backgorundLayer5.src = './image/layer-5.png';

// let x = 0;
// let x2 = 2400;

// // ANIMATION LOOPS
// function animate() {
//   // ctx.drawImage(backgorundLayer2, 0, 0) // now It seems like static image but It actually It runs over and over
//   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // remove the previous frames so It will seemed properly giving 4 arguments(x, y, width, height) ; we only the current animation frames
//   ctx.drawImage(backgorundLayer5, x2, 0);
//   ctx.drawImage(backgorundLayer5, x, 0) // now It seems moving to the left with x = 0 and x-- ; It happens because we still see the previous frames
//   // these two lines will make It looping the image to the first pixel;
//   // if (x < -1600) x = 0; // the problem is It still junk the image and not playable
//   // if (x < -2400) x = 2400; // now we have 2400px wide scrolling endlessly
//   if (x < -2400) x = 2400 + x2 - gameSpeed;  // - gameSpeed make the gap smaller
//   else x -= gameSpeed;
//   // if (x2 < -2400) x2 = 2400; 
//   if (x2 < -2400) x2 = 2400 + x - gameSpeed;  // +x and +x2 remove the gap
//   else x2 -= gameSpeed;
//   // x--; // if It change to x++ It will move to the right
//   // x -= gameSpeed; // x = x - gameSpeed so increase the gameSpeed will move faster
//   requestAnimationFrame(animate); // builtin requestAnimationFrame function, passing the Function name to make It loop
// }
// animate();

// 5 LAYER 5 IMAGES COMBINED make the 5 layer move at different speed

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d'); // getContext() method returns a drawing context on the canvas, or null if the content identifier is not supported, or the canvas has already been set to a different context mode, 2d ; leading  to the creation of a CanvasRenderingContext2D object representing a two-dimensional rendering context
const CANVAS_WIDTH = canvas.width = 800; // 800 700 same as the canvas CSS canvas1, the default is 300x300px
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 10;  // will be applied globaly (to all 5 layers)

// ADD ALL THE IMAGE FILE ;
const backgorundLayer1 = new Image(); 
backgorundLayer1.src = './image/layer-1.png';
const backgorundLayer2 = new Image();
backgorundLayer2.src = './image/layer-2.png';
const backgorundLayer3 = new Image();
backgorundLayer3.src = './image/layer-3.png';
const backgorundLayer4 = new Image();
backgorundLayer4.src = './image/layer-4.png';
const backgorundLayer5 = new Image();
backgorundLayer5.src = './image/layer-5.png';

const slider = document.getElementById('slider');
slider.value = gameSpeed; 
const showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gameSpeed; // now gameSpeed is applied if You change manually
slider.addEventListener('change', function (e) { // change event and callback Function whenever user change it's value
  // console.log(e.target.value); // e will give the meta inforamtion the value has been changed, added with target.value in a DOM tree to get the changed value
  gameSpeed = e.target.value // change the game speed final
  showGameSpeed.innerHTML = e.target.value; // change the number inside span tag
});

// create JavaScript classes to create blueprint for a layer object, then we create 5 instances of that class one for each of our 5 layers, cycling to update and draw them(create JavaScript class When You want to use many similar object)
// create 5 image layer object;

class Layer { // class name use capital first
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.x2 = this.width;
    this.image = image; // create properties called image on this created object, and set to the image we passed the argument on the constructor method
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier; // allow me to change the speed value for each layer
  }
  // move layer horizontally, reset When the layer move off the screen (wrapping in reusable class; You can do all the layers at the same time);
  update() {
    this.speed = gameSpeed * this.speedModifier; 
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed); // for the background move to the left
    this.x2 = Math.floor(this.x2 - this.speed);
  }
  // take the information about the object, everytime update runs to change horizontal x position, draw will re-run again to redraw the image at the new position;
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}

const layer1 = new Layer(backgorundLayer1, 0.2); 
const layer2 = new Layer(backgorundLayer2, 0.4); 
const layer3 = new Layer(backgorundLayer3, 0.6); 
const layer4 = new Layer(backgorundLayer4, 0.8); // new keyword ; looks for class with that name, and it'll trigger it's constructor
const layer5 = new Layer(backgorundLayer5, 1); 

const gameObject = [layer1, layer2, layer3, layer4, layer5];

// ANIMATION LOOPS
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameObject.forEach(object => {
    object.update();
    object.draw();
  }); // builtin forEach() method ; run through all the element in the array and it'll applied whenever callback functtion given
  requestAnimationFrame(animate)
};
animate();
