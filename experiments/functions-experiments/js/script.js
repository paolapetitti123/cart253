/**************************************************
Functions experiments
Paola Petitti

These are experiments with functions
**************************************************/
let hello = {
  string: `Hello, world!`,
  x: 0,
  y: 0,
  vx: 5,
  vy: 1,
  size: 64
};

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(0);


  hello.x += hello.vx;
  hello.y += hello.vy;

  hello.size += 1;


  textAlign(CENTER,CENTER);
  textSize(hello.size);
  textStyle(BOLD);

  fill(200,50,200);
  stroke(255,255,255);
  strokeWeight(3);
  text(hello.string,hello.x, hello.y);
}
