const WIDTH = 800;
const HEIGHT = 600;

const SPACING = 25;

const RECT_SIZE_X = 15;
const RECT_SIZE_Y = 2;

const SQUARE_SIZE = 4;

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);

  angleMode(RADIANS);

  stroke(255);
  strokeWeight(1);
  strokeCap(SQUARE);
}

var drawSquare = (posX, posY) => {
  push();
  translate(posX, posY);
  rect(-(SQUARE_SIZE/2), -(SQUARE_SIZE/2), SQUARE_SIZE, SQUARE_SIZE);
  pop();
}

var drawRectangle = (posX, posY, angle) => {
  push();
  translate(posX, posY);
  rotate(angle);
  rect(-(RECT_SIZE_X/2), -(RECT_SIZE_Y/2), RECT_SIZE_X, RECT_SIZE_Y);
  pop();
}

var draw = function() {
  const targetX = 20;
  const targetY = 7;

  for (let x = 1; x < 32; x++) {
    for (let y = 1; y < 24; y++) {
      if (x === targetX && y === targetY) {
        drawSquare(x * SPACING, y * SPACING);
      } else {
        const angle = Math.atan2(targetY - y, targetX - x);
        drawRectangle(x * SPACING, y * SPACING, angle);
      }
    }
  }
}
