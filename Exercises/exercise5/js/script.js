/**************************************************
OOP Activity
Paola Petitti

turning the juggling simulator into a brick breaker game
**************************************************/

"use strict";
let gravityForce = 0.0025;

// declaring a paddle variable to be used
let paddle;

// declaring the ball information to be stored in an array
let balls = [];
let numBalls = 1;

// declaring the bricks information that will be stored in an array
let brick;
let bricks = [];
let numBrick = 6;
let brickSpacing = 130;
let brickCounter = 0;

// declaring the start state of the game & text that goes with the states
let state = `start`;
let title = `Brick breaker
Use L & R arrow keys to move
Press Enter to start`;
let lose = `GAME OVER!`;
let win = `YOU WIN!`;

// setup()
//
// loading the balls & bricks arrays with new objects, and creating a new paddle
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
// Tells the game what to do in the different states.
function draw() {
  background(0);
  if(state === `start`){
    startScreen();
  }
  else if(state === `play`){
    playGame();
  }
  else if(state === `win`){
    winScreen();
  }
  else if(state === `lose`){
    loseScreen();
  }

}

// Has all the required functions to make the game run
function playGame(){
  handleKey();
  paddle.display();
  brickDisplay();
  ballControl();
  counter();
}

// allows the user to use the L & R arrow keys to move the paddle
function handleKey(){
  // To Play the game
  if(keyIsPressed === true && keyCode === LEFT_ARROW){
    paddle.moveLeft();
  }
  else if(keyIsPressed === true && keyCode === RIGHT_ARROW){
    paddle.moveRight();
  }
}

// Checks to see if the enter key was pressed at the beginning to allow the
// game to run.
function keyPressed(){
  if(state === `start` && keyCode == ENTER){
    state = `play`;
  }
}

// Displays all the bricks
function brickDisplay(){
  for(let i = 0; i < bricks.length; i++){
    let brick = bricks[i];
    if(brick.active){
      brick.display();
    }
  }
}

// Loop that lets the ball move, bounce, be displayed and have gravity
// while also checking if the ball hits the brick.
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
    else if(!ball.active){
      state = "lose";
    }
  }
}

// Checks what the counter variable is at to know when to change the state to
// win if the user gets there.
function counter(){
  if(brickCounter >= numBrick){
    state = "win";
  }
}

// Displays text in the start state with instructions on how to play and to
// press enter to start the game
function startScreen(){
  textSize(35);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  fill(253, 139, 255);
  text(title, width / 2, height / 2);
}

// Displays a win message if the user wins the game
function winScreen(){
  textSize(35);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  fill(253, 139, 255);
  text(win, width / 2, height / 2);
  noLoop();
}

// Displays a lose message if the user loses the game
function loseScreen(){
  textSize(35);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  fill(253, 139, 255);
  text(lose, width / 2, height / 2);
  noLoop();
}
