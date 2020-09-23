/**************************************************
Conditional Experiments
Paola Petitti

This project will be experimenting with conditional expressions
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  if(keyIsPressed)
  {
    background(255);
  }
  else {
    background(0);
  }
}
