const WIDTH = 800;
const HEIGHT = 600;

const NUM_RIPPLES = 10;
const JUMP_DISTANCE = 50;

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background('#AAAAFF');

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

var drawSquare = (posX, posY, size, color) => {
  push();

  translate(posX, posY);
  stroke(color);
  fill(color);
  ellipse(-(size/2), -(size/2), size, size);

  pop();
}

var draw = function() {
    for (let i = 0; i <= NUM_RIPPLES; i++) {
      const initialX = Math.random() * WIDTH;
      const initialY = Math.random() * HEIGHT;
      const angle = Math.random() * 2 * Math.PI;

      let x = initialX;
      let y = initialY;
      for (let j = 0; j < 5; j++) {
        x = x + Math.cos(angle) * JUMP_DISTANCE;
        y = y + Math.sin(angle) * JUMP_DISTANCE;
        drawSquare(x, y, 50, 'white');
      }
    }
}
