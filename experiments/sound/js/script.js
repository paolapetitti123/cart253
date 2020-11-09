/**************************************************
Sound experiments
Paola Petitti
**************************************************/
"use strict";
let synth;
let notes = [`F3`,`G3`,`Ab3`,`Bb3`,`C3`,`Dd3`, `Eb3`, `F4`];
let currentNote = 0;

function preload(){

}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600);

  synth = new p5.PolySynth();
  userStartAudio();

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
}

function playRandomNote(){
  let note = notes[currentNote];
  synth.play(note,1,0,0.1);
  currentNote += 1;
  if(currentNote === notes.length){
    currentNote = 0;
  }
}

function keyPressed(){
  setInterval(playRandomNote,200);
}
