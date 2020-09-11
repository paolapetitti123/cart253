/**************************************************
Drawing An Alien Activity
Paola Petitti

Activity 2, drawing an alien
**************************************************/

// setup()
//
// Creates a UFO and Alien drawing.
function setup()
{
  // Setting up the background color and canvas size
  createCanvas(640,480);
  background(18,8,65);
  noStroke();

  // UFO body in background
  fill(168,168,168);
  ellipse(155,40,100,75);
  fill(255,255,0);
  ellipse(155,40,50,50);
  fill(128,128,128);
  ellipse(155,73,300,65);
  fill(178,178,178);
  ellipse(155,70,300,65);

  // Lights for UFO
  fill(170,255,0);
  ellipse(100,87,15,15);
  fill(170,255,0);
  ellipse(50,80,15,15);
  fill(170,255,0);
  ellipse(215,87,15,15);
  fill(170,255,0);
  ellipse(265,80,15,15);
  fill(170,255,0);
  ellipse(155,90,15,15);

  //Alien body
  fill(178,178,178);
  ellipse(320,495,275,250);

  //Alien Head
  fill(156,156,156);
  ellipse(320,240,180,300);

  // Nostrils
  fill(125,125,125);
  ellipse(315,275,5,5);
  fill(125,125,125);
  ellipse(330,275,5,5);

  // Alien mouth
  stroke(124,16,16);
  strokeWeight(6);
  rectMode(CENTER);
  fill(255,255,255);
  rect(320,330,55,15);

  //Alien Eye L
  noStroke();
  fill(0);
  rotate(365);
  ellipse(345,50,115,45);

  //Alien Eye R
  fill(0);
  rotate(5);
  ellipse(140,415,115,45);

}

// draw()
//
// Does literally nothing 
function draw() {

}
