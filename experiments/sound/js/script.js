/**************************************************
Sound experiments
Paola Petitti
**************************************************/
"use strict";

let barkSFX;
let oscillator;
let t = 0;

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

  let noiseValue = noise(t);
  let newFreq = map(noiseValue,-1,1,440,880);
  oscillator.freq(newFreq);

  t = t + 0.1;
}

function mousePressed(){
  oscillator.start();
}

function mouseReleased(){
  oscillator.stop();
}
