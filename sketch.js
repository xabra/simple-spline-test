var cWidth = 800;
var cHeight = 800;

function setup() {
  createCanvas(cWidth, cHeight);
  background(240);
}

function draw() {
  noFill();
  translate(cWidth / 2, cHeight / 2);
  scale(2.0, -2.0);

  beginShape();
  strokeWeight(2);
  stroke("rgb(100%,0%,100%)");
  vertex(0, 0);
  bezierVertex(80, 0, 80, 75, 0, 75);
  endShape();

  beginShape();
  strokeWeight(5);
  stroke("rgb(100%,0%,10%)");
  point(0, 0);
  point(80, 0);
  point(80, 75);
  point(0, 75);
  endShape();
}
