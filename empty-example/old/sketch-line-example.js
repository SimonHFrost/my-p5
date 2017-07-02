const WIDTH = 800;
const HEIGHT = 600;
let GLOBAL_RANDOM_POINT = [Math.random() * WIDTH, Math.random() * HEIGHT];

lineExampleSetup = function() {
  GLOBAL_RANDOM_POINT = [Math.random() * WIDTH, Math.random() * HEIGHT];
  setInterval(function() {
    GLOBAL_RANDOM_POINT = [Math.random() * WIDTH, Math.random() * HEIGHT];
  }, 500);
}

lineExampleDraw = function() {
  stroke(150 + 105 * Math.random());
  strokeWeight(Math.random() * 2);

  const RANDOM_POINT = [50 - 100 * Math.random(), 50 - 100 * Math.random()];
  const fuzzinessX = 20 * Math.random();
  const fuzzinessY = 20 * Math.random();

  line(RANDOM_POINT[0], RANDOM_POINT[1], WIDTH + fuzzinessX + GLOBAL_RANDOM_POINT[0], HEIGHT + fuzzinessY + GLOBAL_RANDOM_POINT[1]);
};

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  noStroke();
}

lineExampleSetup();

function draw() {
  lineExampleDraw();
}
