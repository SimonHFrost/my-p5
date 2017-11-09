const WIDTH = 800;
const HEIGHT = 600;

const SPACING = 25;

const RECT_SIZE_X = 15;
const RECT_SIZE_Y = 2;

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  fill(255);

  angleMode(RADIANS);

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
  const targetX = 3;
  const targetY = 5;

  for (let x = 1; x < 32; x++) {
    for (let y = 1; y < 24; y++) {
      const angle = Math.atan(x - targetX/y - targetY);
      drawRectangle(x * SPACING, y * SPACING, angle);
    }
  }
}
