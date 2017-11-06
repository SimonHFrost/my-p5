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
  drawRectangle(200, 200, 45);
  drawRectangle(100, 300, 45);
  drawRectangle(300, 100, 45);
}
