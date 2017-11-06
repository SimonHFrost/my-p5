const WIDTH = 800;
const HEIGHT = 600;

const SPACING = 25;

const RECT_SIZE_X = 15;
const RECT_SIZE_Y = 2;

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

  const targetX = 3;
  const targetY = 5;

  for (let x = 0; x < 31; x++) {
    for (let y = 0; y < 23; y++) {
      if (!(x === targetX && y === targetY)) {
        drawRectangle(x * SPACING, y * SPACING, 45);
      }
    }
  }
}
