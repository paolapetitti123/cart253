/**************************************************
Introducing Variables
Paola Petitti

Practicing variable related things
**************************************************/

// Variable Declaration
let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 200,
  speed: 2
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
  ellipse(circle.x, circle.y, circle.size);

  console.log(`circleX: ${circle.x}`);
  console.log("circleY:" + circle.y);
}
