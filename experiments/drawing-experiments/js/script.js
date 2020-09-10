/**************************************************
Drawing Experiments
Paola Petitti

Following along with the lecture videos for p5's drawing
and color functions

makes a cone as of now.
**************************************************/

// setup()
//
// Creates a cone.
function setup()
{
  // Changing canvas size
  createCanvas(500,500);

  // Setting background color mint
  background(191,255,199);

  // Removing the stroke
  noStroke();

/*
Drawing Shapes Video:
  point(250,250);
  rect(0,0,250,250);
  line(0,0,500,500);
  line(500,0,0,500);
  ellipse(250,250,100,100);
*/

// Setting the ellipse to a corner and not center
ellipseMode(CORNER);

// Making a cone
fill(127,0,200,100);
ellipse(250,250,100,100);

fill(137,0,210,100);
ellipse(250,250,80,80);

fill(147,0,220,100);
ellipse(250,250,60,60);

fill(157,0,230,100);
ellipse(250,250,40,40);

fill(167,0,240,100);
ellipse(250,250,20,20);

}

// draw()
//
// Isn't doing anything right now.
function draw() {

}
