const WIDTH = 800;
const HEIGHT = 600;
const MIDDLE = [WIDTH / 2, HEIGHT / 2];

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  noFill();
  stroke(255);
  strokeWeight(4);
}

var current = 0;
var next = 50;
var strokeValue = 255;
var strokeWeightValue = 4;

var offset = 0;
setInterval(function() {
  current = 0;
  next = 50;
  offset += 50;
  stroke(255, 255, strokeValue);
  strokeValue -= 10;
  strokeWeight(strokeWeightValue);
  strokeWeightValue -= 0.3;
}, 1000);

var draw = function() {
  beginShape();

  bezier(current, offset + 0, current, offset + 50, next, offset + 50, next, offset + 0);
  bezier(current, offset + 50, current, offset + 0, next, offset + 0, next, offset + 50);

  current += 50;
  next += 50;

  endShape();
}
