/**************************************************
OOP Activity
Paola Petitti

Here is a description of this template p5 project.
**************************************************/

"use strict";

let paddle;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,windowHeight);
  paddle = new Paddle(150,30);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  paddle.move();
  paddle.display();
}
