const WIDTH = 800;
const HEIGHT = 600;

const SPACING = 25;

const RECT_SIZE_X = 15;
const RECT_SIZE_Y = 1;

const ELLIPSE_SIZE = 2;

const TARGET_X = 8;
const TARGET_Y = 13;

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);

  angleMode(RADIANS);

  stroke(255);
  fill(255);
  strokeWeight(1);
  strokeCap(SQUARE);
}

var drawSquare = (posX, posY) => {
  push();
  translate(posX, posY);
  ellipse(-(ELLIPSE_SIZE/2), -(ELLIPSE_SIZE/2), ELLIPSE_SIZE);
  pop();
}

var drawRectangle = (posX, posY, angle) => {
  push();
  const color = Math.sqrt((TARGET_X * SPACING - posX) ** 2 + (TARGET_Y * SPACING - posY) ** 2) / 2;

  stroke(color);
  fill(color);

  translate(posX, posY);
  rotate(angle);
  rect(-(RECT_SIZE_X/2), -(RECT_SIZE_Y/2), RECT_SIZE_X, RECT_SIZE_Y);
  pop();
}

var draw = function() {
  for (let x = 1; x < 32; x++) {
    for (let y = 1; y < 24; y++) {
      if (x === TARGET_X && y === TARGET_Y) {
        drawSquare(x * SPACING, y * SPACING);
      } else {
        const angle = Math.atan2(TARGET_Y - y, TARGET_X - x);
        drawRectangle(x * SPACING, y * SPACING, angle);
      }
    }
  }
}
