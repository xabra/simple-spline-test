var cWidth = 900;
var cHeight = 800;
let o, m, v1, v2, v3, v4;

function setup() {
  createCanvas(cWidth, cHeight);
  o = createVector(cWidth / 2, cHeight / 2);

  v1 = createVector(0, 0);
  v2 = createVector(50, 0);
  v3 = createVector(50, 50);
  v4 = createVector(0, 50);
}

function draw() {
  background(260);
  noFill();
  translate(o.x, o.y);
  scale(2.0, -2.0);

  m = createVector(mouseX, mouseY);
  v2 = m.sub(o); //translate mouse posn into screen centered coordinates

  beginShape();
  strokeWeight(2);
  stroke("rgb(100%,0%,100%)");
  vertex(v1.x, v1.y);
  bezierVertex(v2.x, v2.y, v3.x, v3.y, v4.x, v4.y);
  endShape();

  beginShape();
  strokeWeight(5);
  stroke("rgb(100%,0%,10%)");
  point(v1.x, v1.y);
  point(v2.x, v2.y);
  point(v3.x, v3.y);
  point(v4.x, v4.y);
  endShape();
}
