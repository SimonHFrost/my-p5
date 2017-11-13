var defaultShadowColor = '#000000';
var defaultShadowDistance = 1;
var shadowAngle = Math.PI / 4;

var toDegrees = (radians) => {
  return radians * 180 / Math.PI;
}

var distanceBetweenTwoPoints = (ax, ay, bx, by) => {
  return Math.sqrt((bx - ax) ** 2 + (by - ay) ** 2);
}

var getDropShadowCoordinates = (shadowAngle, distance) => {
  return {
    x: -distance * shadowAngle,
    y: -distance * shadowAngle,
  }
}

var drawSquareDropShadow = (posX, posY, angle, sizeX, sizeY, shadowColor, shadowDistance) => {
  var color = shadowColor || defaultShadowColor;
  var distance = shadowDistance || defaultShadowDistance;

  push();

  stroke(color);
  fill(color);

  translate(posX * SPACING, posY * SPACING);

  const coordinates = getDropShadowCoordinates(shadowAngle, distance);
  translate(coordinates.x, coordinates.y);
  rotate(angle);

  rect(-(sizeX/2), -(sizeY/2), sizeX, sizeY);

  pop();
}
