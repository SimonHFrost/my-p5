var xoff = 0.0;
var xincrement = 0.01;

const WIDTH = 800;
const HEIGHT = 600;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  noStroke();
}

function draw() {
  noFill();

  stroke(255, 150, 0);
  strokeWeight(Math.random() * 4);

  var randomStart = Math.random() *  HALF_PI;
  var bigness = Math.random();

  arc(
    Math.random() * WIDTH,
    Math.random() * HEIGHT,
    200 * bigness,
    200 * bigness,
    randomStart + HALF_PI,
    randomStart + HALF_PI + bigness * PI
  );
}
