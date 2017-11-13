const WIDTH = 600;
const HEIGHT = 600;

const SPACING = 15;

const SQUARE_SIZE = 5;
const GRID_SIZE = 40;

const CIRCLE_CENTER_X = 20;
const CIRCLE_CENTER_Y = 20;
const CIRCLE_RADIUS = 20;

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background('#FFFFFF');

  angleMode(DEGREES);

  stroke('#000000');
  fill('#000000');

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

var setColor = (posX, posY) => {
  var g = Math.round(posX / GRID_SIZE * 255);
  var b = Math.round(posY / GRID_SIZE * 255);

  // Convert to hex
  g = Number(g).toString(16);
  g = g.length === 1 ? '0' + g : g;
  b = Number(b).toString(16);
  b = b.length === 1 ? '0' + b : b;

  var color = '#FF' + g + b;

  stroke(color);
  fill(color);
}

var drawSquare = (posX, posY, angle) => {
  const size = 5 + SQUARE_SIZE * Math.random();

  push();

  translate(posX * SPACING, posY * SPACING);
  rotate(angle);
  setColor(posX, posY);
  rect(-(size/2), -(size/2), size, size);

  pop();
}

var isInCircle = (x, y) => {
  return Math.sqrt((x - CIRCLE_CENTER_X) ** 2 + (y - CIRCLE_CENTER_Y) ** 2) < CIRCLE_RADIUS
}

var draw = function() {
  for (let x = 1; x <= GRID_SIZE; x++) {
    for (let y = 1; y <= GRID_SIZE; y++) {
      if (isInCircle(x, y)) {
        drawSquare(x, y, Math.random() * 360);
      }
    }
  }
}
