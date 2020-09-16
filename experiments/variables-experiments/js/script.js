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
  fill: 255
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

  circle.x += circle.speed;
  circle.x = constrain(circle.x,0,width);

  circle.size = map(mouseY, height, 0, 50, 500);

  circle.fill = map(circle.x, 0, width, 0, 255);
  fill(circle.fill);
  ellipse(circle.x, circle.y, circle.size);
}
