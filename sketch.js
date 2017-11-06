const WIDTH = 800;
const HEIGHT = 600;

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
  push();
  translate(200, 200);
  rotate(45);
  rect(-50, -25, 100, 50);
  pop();

  push();
  translate(100, 300);
  rotate(45);
  rect(-50, -25, 100, 50);
  pop();

  push();
  translate(300, 100);
  rotate(45);
  rect(-50, -25, 100, 50);
  pop();
}
