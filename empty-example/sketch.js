const WIDTH = 800;
const HEIGHT = 600;
let globalRandomPoint = [Math.random() * WIDTH, Math.random() * HEIGHT];
const MIDDLE = [WIDTH / 2, HEIGHT / 2];

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  noStroke();
}

var draw = function() {
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
