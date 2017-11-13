const WIDTH = 550;
const HEIGHT = 550;

const SPACING = 25;

const SQUARE_SIZE = 20;
const GRID_SIZE = 21;

const CIRCLE_CENTER_X = 20;
const CIRCLE_CENTER_Y = 20;
const CIRCLE_RADIUS = 20;

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background('#000');

  angleMode(DEGREES);

  stroke('#000000');
  fill('#000000');

  strokeWeight(1);
  strokeCap(SQUARE);

  noLoop();
}

var setColor = (colorBase, colorModifier) => {
  var color = chroma(colorBase).set('hsl.h', colorModifier).hex();

  fill(color);
}

var drawSquare = (posX, posY, size, colorBase, colorModifier) => {
  push();

  translate(posX * SPACING, posY * SPACING);
  setColor(colorBase, colorModifier);
  rect(-(size/2), -(size/2), size, size);

  pop();
}

var draw = function() {
    for (let y = 1; y <= GRID_SIZE; y++) {
      var numberInGrid = GRID_SIZE + (GRID_SIZE / 3);

      for (let x = 1; x <= GRID_SIZE / 3; x++) {
        var colorModifier = (x + y) / numberInGrid / 2;
        drawSquare(x, y, SQUARE_SIZE, '#ff9e9e', colorModifier * 360);
      }

      for (let x = 1; x <= GRID_SIZE / 3; x++) {
        var colorModifier = (x + y) / numberInGrid / 2;
        drawSquare(7 + x, y, SQUARE_SIZE * 0.8, '#9eff9f', 120 + colorModifier * 360);
      }

      for (let x = 1; x <= GRID_SIZE / 3; x++) {
        var colorModifier = (x + y) / numberInGrid / 2;
        drawSquare(14 + x, y, SQUARE_SIZE * 0.6, '#9eafff', 240 + colorModifier * 360);
      }
    }
}
