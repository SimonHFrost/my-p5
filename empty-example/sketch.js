const WIDTH = 800;
const HEIGHT = 600;
const MIDDLE = [WIDTH / 2, HEIGHT / 2];

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(175, 255, 175);
  noFill();
  stroke(255);
}

var current = 0;
var next = 50;

var draw = function() {
  beginShape();

  bezier(current, 0, current, 50, next, 50, next, 0);
  // bezier(current, 50, current, 0, next, 0, next, 50);

  current += 50;
  next += 50;

  endShape();
}
