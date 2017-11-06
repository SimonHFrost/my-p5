const WIDTH = 800;
const HEIGHT = 600;

const GRID_SIZE = 25;
const TARGET = [2, 2];

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  fill(255);

  stroke(255);
  strokeWeight(1);
  strokeCap(SQUARE);
}

var draw = function() {
  // x, y, w, h
  rect(80, 60, 55, 55);

  // x1, y1, x2, y2, x3, y3, x4, y4
  bezier(85, 20, 10, 10, 90, 90, 15, 80);
}
