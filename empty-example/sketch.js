var xoff = 0.0;
var xincrement = 0.01;

const WIDTH = 800;
const HEIGHT = 600;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  noStroke();
}

var GLOBAL_RANDOM_POINT = [Math.random() * WIDTH, Math.random() * HEIGHT];
var GLOBAL_COLOR = Math.random() * 100;

setInterval(function() {
  GLOBAL_RANDOM_POINT = [Math.random() * WIDTH, Math.random() * HEIGHT];
}, 500);

function draw() {
  noFill();

  stroke(150 + 105 * Math.random(), GLOBAL_COLOR);
  strokeWeight(Math.random() * 2);

  const RANDOM_POINT = [50 - 100 * Math.random(), 50 - 100 * Math.random()];
  const fuzzinessX = 20 * Math.random();
  const fuzzinessY = 20 * Math.random();

  line(RANDOM_POINT[0], RANDOM_POINT[1], WIDTH + fuzzinessX + GLOBAL_RANDOM_POINT[0], HEIGHT + fuzzinessY + GLOBAL_RANDOM_POINT[1]);
}
