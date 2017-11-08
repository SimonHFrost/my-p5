const WIDTH = 1600;
const HEIGHT = 800;

const SPACING = 20;

const RECT_SIZE_X = 10;
const RECT_SIZE_Y = 10;

const CIRCLE_CENTER_X = 20;
const CIRCLE_CENTER_Y = 20;
const CIRCLE_RADIUS = 20;

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);

  angleMode(DEGREES);

  stroke('#00FF00');
  fill('#00FF00');
  strokeWeight(1);
  strokeCap(SQUARE);

  noLoop();
}

var toDegrees = (radians) => {
  return radians * 180 / Math.PI;
}

var distanceBetweenTwoPoints = (ax, ay, bx, by) => {
  return Math.sqrt((bx - ax) ** 2 + (by - ay) ** 2);
}

var getDropShadowCoordinates = (posX, posY) => {
  // FIXME: Should be able to do this without using negative...
  const dist = -10;
  let angle = Math.atan2((CIRCLE_CENTER_X - posX), (CIRCLE_CENTER_Y - posY));
  return {
    x: dist * Math.sin(angle),
    y: dist * Math.cos(angle),
  }
}

var drawDropShadow = (posX, posY) => {
  push();

  stroke('#FF0000');
  fill('#FF0000');

  const coordinates = getDropShadowCoordinates(posX, posY);
  translate(posX * SPACING, posY * SPACING);
  translate(coordinates.x, coordinates.y);

  rect(-(RECT_SIZE_X/2), -(RECT_SIZE_Y/2), RECT_SIZE_X, RECT_SIZE_Y);

  pop();
}

var drawRectangle = (posX, posY, angle) => {
  drawDropShadow(posX, posY, angle);

  push();
  translate(posX * SPACING, posY * SPACING);
  rotate(angle);
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
