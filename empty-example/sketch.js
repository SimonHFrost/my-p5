const WIDTH = 800;
const HEIGHT = 600;

const GRID_SIZE = 25;

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  noFill();
  stroke(255);
  strokeWeight(1);
}

var draw = function() {
  // NOTE: Offset by 1 so there's padding at the side of the screen
  for (let x = 1; x < 7; x++) {
    for (let y = 1; y < 7; y++) {
      const first = [x * GRID_SIZE, y * GRID_SIZE]
      const second = [first[0] + 10, first[1] + 10];

      line(first[0], first[1], second[0], second[1]);
    }
  }
}
