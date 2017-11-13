var shadowColor = '#000000';
var shadowDistance = 1;
var shadowAngle = Math.PI / 4;

var toDegrees = (radians) => {
  return radians * 180 / Math.PI;
}

var distanceBetweenTwoPoints = (ax, ay, bx, by) => {
  return Math.sqrt((bx - ax) ** 2 + (by - ay) ** 2);
}

var getDropShadowCoordinates = (posX, posY) => {
  return {
    x: -shadowDistance * shadowAngle,
    y: -shadowDistance * shadowAngle,
  }
}

var drawSquareDropShadow = (posX, posY, angle, sizeX, sizeY) => {
  push();

  stroke(shadowColor);
  fill(shadowColor);

  const coordinates = getDropShadowCoordinates(posX, posY);
  translate(posX * SPACING, posY * SPACING);
  translate(coordinates.x, coordinates.y);
  rotate(angle);

  rect(-(sizeX/2), -(sizeY/2), sizeX, sizeY);

  pop();
}
