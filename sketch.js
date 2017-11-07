const WIDTH = 800;
const HEIGHT = 600;

const SPACING = 15;

const RECT_SIZE_X = 10;
const RECT_SIZE_Y = 10;

const CIRCLE_CENTER_X = 20;
const CIRCLE_CENTER_Y = 20;
const CIRCLE_RADIUS = 20;

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

var drawDropShadow = (posX, posY) => {
  push();

  stroke(150);
  fill(150);

  const distance = 3;

  const angleAway = Math.atan((posY - CIRCLE_CENTER_Y / posX - CIRCLE_CENTER_X));

  const x = Math.sin(angleAway) * distance;
  const y = Math.cos(angleAway) * distance;

  translate(x, y);
  console.log('translating', angleAway * 360 - 180, x, y);

  rect(-(RECT_SIZE_X/2), -(RECT_SIZE_Y/2), RECT_SIZE_X, RECT_SIZE_Y);

  pop();
}

var drawRectangle = (posX, posY, angle) => {
  push();
  translate(posX * SPACING, posY * SPACING);
  rotate(angle);
  drawDropShadow(posX, posY, angle);
  rect(-(RECT_SIZE_X/2), -(RECT_SIZE_Y/2), RECT_SIZE_X, RECT_SIZE_Y);
  pop();
}

var isInCircle = (x, y) => {
  return Math.sqrt((x - CIRCLE_CENTER_X) ** 2 + (y - CIRCLE_CENTER_Y) ** 2) < CIRCLE_RADIUS
}

var draw = function() {
  for (let x = 1; x <= 100; x++) {
    for (let y = 1; y <= 100; y++) {
      if (isInCircle(x, y)) {
        drawRectangle(x, y, 0);
      }
    }
  }
}
