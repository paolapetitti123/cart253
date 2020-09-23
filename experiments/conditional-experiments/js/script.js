/**************************************************
Conditional Experiments
Paola Petitti

This project will be experimenting with conditional expressions
**************************************************/
let displayCircle = false;

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
  background(0);

  if(mouseIsPressed){
    displayCircle = true;
  }

  if(displayCircle)
  {
    ellipse(250,250,100,100);
  }

}
