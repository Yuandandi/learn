const grid = document.querySelector(".grid")
const block = document.createElement("div")
const blockWidth = 100;
const blockHeight = 20;

// create block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis, blockWidth, yAxis]
    this.topLeft = [xAxis, blockWidth, blockHeight]
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

// all my blocks
const blocks = [
  new Block(10, 270)
]

// draw my block
function addBlock() {
  for (let i = 0; i < blocks.length; i++) {
    block.classList.add("block")
    block.style.left = blocks[i].bottomLeft[0];
    block.style.bottom = "50px";
    grid.appendChild(block);
  };
}

addBlock();
