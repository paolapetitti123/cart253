/**************************************************
Conditional Experiments
Paola Petitti

This project will be experimenting with conditional expressions
**************************************************/
// Variable declaration
let bgShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1
}


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
  background(bgShade);

  circle.x += circle.speed;
  fill(255,255,255);

  if (!(circle.x < width/3))
  {
      fill(255,0,0);
  }


  ellipse(circle.x,circle.y,circle.size);
}
