const WIDTH = 800;
const HEIGHT = 600;

const NUM_RIPPLES = 10;
const JUMP_DISTANCE = 50;
const BASE_SIZE = 50;

const BACKGROUND_COLOR = '#AAAAFF';

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(BACKGROUND_COLOR);

  angleMode(RADIANS);

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

var drawCircle = (posX, posY, size, color) => {
  const smallerSize = size - 5;

  push();

  translate(posX, posY);
  stroke(color);
  fill(color);
  ellipse(-(size/2), -(size/2), size, size);

  stroke(BACKGROUND_COLOR);
  fill(BACKGROUND_COLOR);
  ellipse(-(size/2), -(size/2), smallerSize, smallerSize);

  pop();
}

var draw = function() {
    for (let i = 0; i <= NUM_RIPPLES; i++) {
      const initialX = Math.random() * WIDTH;
      const initialY = Math.random() * HEIGHT;
      const initialAngle = Math.random() * 2 * Math.PI;

      let x = initialX;
      let y = initialY;
      let size = BASE_SIZE;
      let angle = initialAngle;

      for (let j = 0; j < 5; j++) {
        x = x + Math.cos(angle) * JUMP_DISTANCE;
        y = y + Math.sin(angle) * JUMP_DISTANCE;

        drawCircle(x, y, size, 'white');
        size = size * 0.85;
        console.log(angle);
        angle = angle - (angle * 0.1);
      }
    }
}
