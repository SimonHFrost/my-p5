const WIDTH = 640;
const HEIGHT = 640;

const SPACING = 25;

const SQUARE_SIZE = 20;
const GRID_SIZE = 21;

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

var drawSquare = (posX, posY, size) => {
  push();

  translate(posX * SPACING, posY * SPACING);
  setColor(posX, posY);
  rect(-(size/2), -(size/2), size, size);

  pop();
}

var draw = function() {
    for (let y = 1; y <= GRID_SIZE; y++) {
      for (let x = 1; x <= GRID_SIZE / 3; x++) {
        drawSquare(x, y, SQUARE_SIZE);
      }

      for (let x = 7; x <= 7 + GRID_SIZE / 3; x++) {
        drawSquare(x, y, SQUARE_SIZE * 0.8);
      }

      for (let x = 14; x <= 14 + GRID_SIZE / 3; x++) {
        drawSquare(x, y, SQUARE_SIZE * 0.6);
      }
    }
}
