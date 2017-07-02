const WIDTH = 800;
const HEIGHT = 600;
const MIDDLE = [WIDTH / 2, HEIGHT / 2];

var current = 0;
var next = 25;

var verticalPosition = true;
var strokeWeightValue = 1;

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  noFill();
  stroke(255);
  strokeWeight(strokeWeightValue);
}

var draw = function() {
  beginShape();

  if (!verticalPosition) {
    bezier(current, 0 + 50, current, 50 + 50, next, 50 + 50, next, 0 + 50);
  } else {
    bezier(current, 50, current, 0, next, 0, next, 50);
  }

  strokeWeightValue += 0.5;
  strokeWeight(strokeWeightValue);

  verticalPosition = !verticalPosition;

  current += 25;
  next += 25;

  endShape();
}
