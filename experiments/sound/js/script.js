/**************************************************
Sound experiments
Paola Petitti
**************************************************/
"use strict";

let barkSFX;

function preload(){
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
}

function mousePressed(){
  barkSFX.play();
}
