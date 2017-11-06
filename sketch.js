const WIDTH = 800;
const HEIGHT = 600;

const SPACING = 50;

const RECT_SIZE_X = 25;
const RECT_SIZE_Y = 5;

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  fill(255);

  angleMode(DEGREES);

  stroke(255);
  strokeWeight(1);
  strokeCap(SQUARE);
}

var drawRectangle = (posX, posY, angle) => {
  push();
  translate(posX, posY);
  rotate(angle);
  rect(-(RECT_SIZE_X/2), -(RECT_SIZE_Y/2), RECT_SIZE_X, RECT_SIZE_Y);
  pop();
}

var draw = function() {
  translate(SPACING, SPACING);

  for (let x = 0; x < 15; x++) {
    for (let y = 0; y < 11; y++) {
      drawRectangle(x * SPACING, y * SPACING, 45);
    }
  }
}
