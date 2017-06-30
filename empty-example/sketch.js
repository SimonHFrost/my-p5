const WIDTH = 800;
const HEIGHT = 600;
let GLOBAL_RANDOM_POINT = [Math.random() * WIDTH, Math.random() * HEIGHT];
let MIDDLE = [WIDTH / 2, HEIGHT / 2];

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  noStroke();
}

function draw() {
  translate(MIDDLE[0], MIDDLE[1]);
  stroke(100, 100, 100);
  beginShape();
  // Exterior part of shape, clockwise winding
  vertex(-40, -40);
  vertex(40, -40);
  vertex(40, 40);
  vertex(-40, 40);
  // Interior part of shape, counter-clockwise winding
  beginContour();
  vertex(-20, -20);
  vertex(-20, 20);
  vertex(20, 20);
  vertex(20, -20);
  endContour();
  endShape(CLOSE);
}
