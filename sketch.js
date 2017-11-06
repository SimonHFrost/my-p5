const WIDTH = 800;
const HEIGHT = 600;

const GRID_SIZE = 25;
const TARGET = [2, 2];

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  fill(255);

  angleMode(DEGREES);

  stroke(255);
  strokeWeight(1);
  strokeCap(SQUARE);
}

var draw = function() {
  rotate(45);

  // x, y, w, h
  rect(0, 0, 100, 50);
}
