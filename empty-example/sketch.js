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
  // NOTE: Offset by 1 so there's padding at the side of the screen
  for (let x = 1; x < 11; x++) {
    for (let y = 1; y < 11; y++) {
      const first = [x * GRID_SIZE, y * GRID_SIZE]

      if (x === TARGET[0] && y === TARGET[1]) {
        // NOTE: Offset by half the distance of the line (5) kind of hacky...
        rect(first[0] + 2.5, first[1] + 2.5, 5, 5);
        continue;
      }

      const second = [first[0] + 10, first[1] + 10];

      line(first[0], first[1], second[0], second[1]);
    }
  }
}
