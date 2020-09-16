/**************************************************
Activity 3: Moving Pictures
Paola Petitti

Write Description here!
**************************************************/

// Variable declarations
let bg = {
  red: 0,
  green: 0,
  blue: 0
};
let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  fill: 255,
  alpha: 200
};
let circle2 = {
  x: 500,
  y: 250,
  size: 75,
  fill: 255,
  alpha: 200
};

// setup()
//
// Description of setup() goes here
function setup() {
  createCanvas(500,500);
  noStroke();
}

// draw()
//

function draw() {
  // Background
  background(bg.red,bg.green,bg.blue);
  bg.red += 1;

  // Left circle
  circle1.x += 1;
  circle1.x = constrain(circle1.x,0,width/2);
  circle1.size += 1;
  circle1.size = constrain(circle1.size,0, width);
  fill(circle1.fill, circle1.alpha);
  ellipse(circle1.x,circle1.y, circle1.size);

  // Right circle
  circle2.x += -1;
  circle2.x = constrain(circle2.x, width/2, width);
  circle2.size = circle1.size * 0.75;
  fill(circle2.fill, circle2.alpha);
  ellipse(circle2.x, circle2.y, circle2.size);

}
