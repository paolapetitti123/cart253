/**************************************************
OOP Activity
Paola Petitti

turning the juggling simulator into a brick breaker game
**************************************************/

"use strict";
let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 1;


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,windowHeight);
  paddle = new Paddle(150,30);

  for (let i = 0; i < numBalls; i++){
    let x = width/2;
    let y = height/2;
    let ball = new Ball(x,y);
    balls.push(ball);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if(keyIsPressed === true && keyCode === LEFT_ARROW){
    paddle.moveLeft();
  }
  else if(keyIsPressed === true && keyCode === RIGHT_ARROW){
    paddle.moveRight();
  }
//  paddle.move();
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
