const WIDTH = 800;
const HEIGHT = 600;
const MIDDLE = [WIDTH / 2, HEIGHT / 2];

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(255, 175, 175);
  noFill();
  stroke(255);
}

setInterval(function() {
  translate();
  translate(100);
}, 1000);

var counter = 20;
var draw = function() {
  beginShape();

  vertex(30, counter);
  bezierVertex(80, 0, 80, 75, 30, 75);
  bezierVertex(50, 80, 60, 25, 30, 20);

  translate(counter, counter);

  endShape();

  counter++;
}
