/**************************************************
Sound experiments
Paola Petitti
**************************************************/
"use strict";

let barkSFX;
let oscillator;
let angle = 0;

function preload(){
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600);
  userStartAudio();

  oscillator = new p5.Oscillator(880,`sine`);
  oscillator.amp(0.1);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  let r = random(0,1);
  let newFreq = map(r,-1,1,440,880);
  oscillator.freq(newFreq);

  angle = angle + 0.1;
}

function mousePressed(){
  oscillator.start();
}

function mouseReleased(){
  oscillator.stop();
}
