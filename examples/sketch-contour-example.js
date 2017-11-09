const WIDTH = 500;
const HEIGHT = 500;
let globalRandomPoint = [Math.random() * WIDTH, Math.random() * HEIGHT];
const MIDDLE = [WIDTH / 2, HEIGHT / 2];

var setup = function() {
  createCanvas(WIDTH, HEIGHT);
  background(0);
  noStroke();
}

var getSomeFuzziness = function() {
  return Math.random() * 30 - 15;
}

var counter = WIDTH/2 + 50; // Add a little padding
var draw = function() {
  translate(MIDDLE[0], MIDDLE[1]);

  if (counter > 10) {
    counter--;
  } else {
    return;
  }

  stroke(counter + 50);
  beginShape();

  // Exterior part of shape, clockwise winding
  vertex(-counter + getSomeFuzziness(), -counter + getSomeFuzziness());
  vertex(counter + getSomeFuzziness(), -counter + getSomeFuzziness());
  vertex(counter + getSomeFuzziness(), counter + getSomeFuzziness());
  vertex(-counter + getSomeFuzziness(), counter + getSomeFuzziness());

  endShape(CLOSE);
}
