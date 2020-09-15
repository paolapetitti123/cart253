/**************************************************
Introducing Variables
Paola Petitti

Practicing variable related things
**************************************************/

// Variable Declaration
let circleSize = 200,
    circleX = 0,
    circleY = 250,
    circleSpeed = 2
    circleAcceleration = 0.25;
let backgroundShade = 0;

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
  circleX += circleSpeed;
  circleSpeed += circleAcceleration;
  ellipse(circleX, circleY, circleSize);
}
