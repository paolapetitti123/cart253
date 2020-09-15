/**************************************************
Introducing Variables
Paola Petitti

Practicing variable related things
**************************************************/

// Variable Declaration
let backgroundShade = 0;
let circle = {
  x: 250,
  y: 250,
  size: 100,
  speed: 1,
  fill: 0
};

// setup()
//
// creating the canvas
function setup()
{
  createCanvas(500, 500);
}

// draw()
//
// Creating a circle that moves across the canvas.
function draw()
{
  background(backgroundShade);

  circle.speed = random(-5,5);
  circle.x += circle.speed;
  circle.size = random(10, 100);

  circle.fill = random(0,255);
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);
}
