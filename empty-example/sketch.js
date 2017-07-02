const WIDTH = 800;
const HEIGHT = 600;
const MIDDLE = [WIDTH / 2, HEIGHT / 2];

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  noFill();
  stroke(255);
  strokeWeight(1);
}

var current = 0;
var next = 25;

var verticalPosition = true;

var draw = function() {
  beginShape();

  if (!verticalPosition) {
    bezier(current, 0 + 50, current, 50 + 50, next, 50 + 50, next, 0 + 50);
  } else {
    bezier(current, 50, current, 0, next, 0, next, 50);
  }

  verticalPosition = !verticalPosition;

  current += 25;
  next += 25;

  endShape();
}
