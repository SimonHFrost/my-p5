const WIDTH = 800;
const HEIGHT = 600;

const RECT_SIZE_X = 100;
const RECT_SIZE_Y = 50;

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
  // offset
  translate(100, 100);

  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      drawRectangle(x * 100, y * 100, 45);
    }
  }
}
