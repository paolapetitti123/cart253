/**************************************************
Project 1: The Stealer
Paola Petitti

Here is a description of this template p5 project.
**************************************************/
// Variable declarations
let bgImg;
let bgLeft = 0;
let moveSpeed = 15;
let heartLeft = 0;
let heartImg;
let heartD = {
  x: 7000,
  y: 500,
  size: 350
}



// loading images
function preload(){
  bgImg = loadImage('assets/images/stealerBackground.png');
  heartImg = loadImage('assets/images/diamondHeart.png');
}

// setup()
//
// Initializing stealer object and creating canvas.
function setup() {
createCanvas(1280,720);
stealer = new Stealer(50, height - 200);
}

// draw()
//
// shows background, diamond heart, now allows square to jump
function draw() {
  background(0);
  backgroundMove();
  heartDiamond();



  stealer.display();
  stealer.move();
  handleKey();

}

function backgroundMove(){
  imageMode(CORNER);
  bgImg.resize(7250,720);
  image(bgImg, bgLeft, 0);
}

function heartDiamond(){
  let hrtX = bgLeft + 7000;
  imageMode(CENTER);
  image(heartImg, hrtX, heartD.y,heartD.size, heartD.size);
  hrtTouch(hrtX);
}

// Functions to move the background
function moveBgLeft(){
  let minBgLeft = -bgImg.width + width;

  if (bgLeft - moveSpeed > minBgLeft){
    bgLeft -= moveSpeed;
  }


}

function moveBgRight(){
  if(bgLeft + moveSpeed < 0){
    bgLeft += moveSpeed;
  }
}

// Function to see which keys are being held down to move the bg
function handleKey(){
  if(keyIsDown(LEFT_ARROW)){
    if(stealer.canMoveLeft()){
      stealer.moveLeft();
    } else {
      moveBgRight();
    }
  }
  else if (keyIsDown(RIGHT_ARROW)){
    if(stealer.canMoveRight()){
      stealer.moveRight();
    }
    else {
      moveBgLeft();
      }
    }
}

// Function to see if the UP arrow gets pressed once to jump
function keyPressed(){
  if (keyCode === UP_ARROW){
    console.log(stealer.pos.y);
    stealer.jump();
  }
}


function hrtTouch(heartX){
  let d = dist(stealer.pos.x, stealer.pos.y, heartX, heartD.y);
  if(d < stealer.size/2 + heartD.size/2){
    console.log("TOUCHING");
  }
}
