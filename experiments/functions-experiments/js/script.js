/**************************************************
Functions experiments
Paola Petitti

These are experiments with functions
**************************************************/
// Variable declarations
let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0
}

function setup() {
  createCanvas(500, 500)
  reset();
}

function draw() {
  background(0);

  move();
  checkOffScreen();
  display();


}

function checkOffScreen(){
  if (circleIsOffScreen()){
    reset();
  }
}

function circleIsOffScreen(){
  let result = (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height);
  return result;
}

function display(){
  ellipse(circle.x, circle.y, circle.size);
}

function move() {
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;
}

function reset() {
  circle.x = 250;
  circle.y = 250;
  circle.vx = random(-10, 10);
  circle.vy = random(-10, 10);
}
