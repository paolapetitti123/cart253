/**************************************************
Activity 9: Sound Activity
Paola Petitti

A program that plays music based on physics
**************************************************/
"use strict";

// The balls
let balls = [];

// F-minor scale
let notes = [`F3`,`G3`,`Ab4`,`Bb4`, `C4`, `Db4`, `Eb4`, `F4`];

// setup()
//
// Creating the canvas
function setup() {
  createCanvas(1280,720);
  userStartAudio();
}

// draw()
//
// Write comment here
function draw() {
  background(0);

  for(let i = 0; i < balls.length; i++){
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

function mousePressed() {
  createBall(mouseX,mouseY);
}

function createBall(x,y){
  let note = random(notes);
  let ball = new Ball(x,y,note);
  balls.push(ball);
}
