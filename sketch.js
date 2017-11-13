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
  var color = chroma(colorBase).set('hsl.h', 360 * colorModifier).hex();
  console.log(colorBase, colorModifier, color);

  stroke('#FFF');
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
        var colorModifier = (x + y) / numberInGrid;
        drawSquare(x, y, SQUARE_SIZE, '#ff5959', colorModifier);
      }

      for (let x = 1; x <= GRID_SIZE / 3; x++) {
        var colorModifier = (x + y) / numberInGrid;
        drawSquare(7 + x, y, SQUARE_SIZE * 0.8, '#64ff59', 120 + colorModifier);
      }

      for (let x = 1; x <= GRID_SIZE / 3; x++) {
        var colorModifier = (x + y) / numberInGrid;
        drawSquare(14 + x, y, SQUARE_SIZE * 0.6, '#59bbff', 240 + colorModifier);
      }
    }
}
