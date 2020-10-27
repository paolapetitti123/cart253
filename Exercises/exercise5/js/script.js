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

let brick;
let bricks = [];
let numBrick = 6;
let brickSpacing = 130;

let brickCounter = 0;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(1280,720);
  paddle = new Paddle(150,30);

  for (let i = 0; i < numBalls; i++){
    let x = width/2;
    let y = height/2;
    let ball = new Ball(x,y);
    balls.push(ball);
  }

  for (let i = 0; i < numBrick; i++){
    let y = 100;
    let brick = new Brick(brickSpacing, y);
    brickSpacing += 200;
    bricks.push(brick);
  }


}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  handleKey();
  paddle.display();
  brickDisplay();
  ballControl();
}


function handleKey(){
  if(keyIsPressed === true && keyCode === LEFT_ARROW){
    paddle.moveLeft();
  }
  else if(keyIsPressed === true && keyCode === RIGHT_ARROW){
    paddle.moveRight();
  }
}

function brickDisplay(){
  for(let i = 0; i < bricks.length; i++){
    let brick = bricks[i];
    if(brick.active){
      brick.display();
    }
  }
}

function ballControl(){
  for(let i = 0; i < balls.length; i++){
    let ball = balls[i];
    if(ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
      for (let j = 0; j < bricks.length; j++){
        let brick = bricks[j];
        if(brick.active){
          ball.hit(brick);
        }
      }
    }
  }
}
