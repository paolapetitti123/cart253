/**************************************************
Introducing Variables
Paola Petitti

Practicing variable related things
**************************************************/

// Variable Declaration
let circleSize = 200,
    circleX = 250,
    circleY = 250;
let backgroundShade = 0;

// setup()
//
// Description of setup() goes here.
function setup()
{
  createCanvas(500, 500);
}

// draw()
//
// Description of draw() goes here.
function draw()
{
  background(backgroundShade);
  ellipse(circleX, circleY, circleSize);
}
