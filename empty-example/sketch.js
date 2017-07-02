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

var draw = function() {
  beginShape();

  var current = 0;
  var next = 50;
  bezier(current, 0, current, 50, next, 50, next, 0);

  current += 50;
  next += 50;

  endShape();
}
