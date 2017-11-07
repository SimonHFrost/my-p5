const WIDTH = 800;
const HEIGHT = 600;

const SPACING = 20;

const RECT_SIZE_X = 5;
const RECT_SIZE_Y = 5;

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);

  angleMode(DEGREES);

  stroke(255);
  fill(255);
  strokeWeight(1);
  strokeCap(SQUARE);

  noLoop();
}

var drawRectangle = (posX, posY, angle) => {
  push();
  translate(posX, posY);
  rotate(angle);
  rect(-(RECT_SIZE_X/2), -(RECT_SIZE_Y/2), RECT_SIZE_X, RECT_SIZE_Y);
  pop();
}

var draw = function() {
  for (let x = 1; x <= 20; x++) {
    for (let y = 1; y <= 20; y++) {
      drawRectangle(x * SPACING, y * SPACING, Math.random() * 360);
    }
  }
}
