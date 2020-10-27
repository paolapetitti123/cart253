/**************************************************
OOP Activity
Paola Petitti

Juggling simulator
**************************************************/

"use strict";
let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 3;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,windowHeight);
  paddle = new Paddle(150,30);

  for (let i = 0; i < numBalls; i++){
    let x = random(0, width);
    let y = random(-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  paddle.move();
  paddle.display();

  for(let i = 0; i < balls.length; i++){
    let ball = balls[i];
    if(ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }
}
