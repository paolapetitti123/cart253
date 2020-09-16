/**************************************************
Drawing An Alien Activity
Paola Petitti

Activity 2, drawing an alien
**************************************************/
let circle = {
  fill: 0
};
// setup()
//
// Creates a UFO and Alien drawing.
function setup()
{
  // Setting up the background color and canvas size
  createCanvas(640,480);
  background(18,8,65);
  noStroke();


  // Grass
  fill(8,65,11);
  rect(0,420,640,240);

  // Barn
  fill(130,84,21);
  rect(340,140,300,280);
  fill(149,15,15);
  rect(430,270,150,150,20);
  fill(149,15,15);
  rect(430,370,150,50);
  fill(0);
  rect(500,270,10,150);
  fill(0);
  ellipse(480,350,10,10);
  fill(0);
  ellipse(530,350,10,10);
  fill(0);
  triangle(500,0,300,200,700,200);

  // Lamp



  // dog
  rotate(69);
  fill(65,40,8);
  triangle(125,250,95,300,125,300,);
  fill(65,40,8);
  ellipse(100,300,55,55);
  fill(65,40,8);
  rect(60,295,35,25,10);
  fill(65,40,8);
  rect(95,310,100,70,20);
  fill(65,40,8);
  rect(100,355,20,55,20);
  fill(65,40,8);
  rect(170,355,20,55,20);
  fill(65,40,8);
  rect(185,295,10,50,10);
  rotate(-69);

  // UFO BEAM
  fill(255,255,0,150);
  triangle(150,20,0,480,300,480);

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

  // Bow tie
  fill(0);
  ellipse(320,425,20);
  fill(0);
  triangle(290,400,320,425,290,450);
  fill(0);
  triangle(350,400,350,450,320,425);

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
  fill(0);
  rect(320,330,15,15,20);

  //Alien Eye L
  noStroke();
  fill(0);
  rotate(365);
  ellipse(345,50,115,45);
  rotate(-365);

  //Alien Eye R
  fill(0);
  rotate(-365);
  ellipse(195,400,115,45);

}
 
// draw()
//
// Does literally nothing
function draw() {
  circle.fill = random(150,255);
  fill(0);
  rect(505,222,50,15,20);
  fill(circle.fill);
  ellipse(505,242,25,25);
}
