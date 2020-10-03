/**************************************************
Project 1: The Stealer
Paola Petitti

Here is a description of this template p5 project.
**************************************************/
// Variable declarations
let bgImg;
let bgLeft = 0;
let moveSpeed = 15;
let stealer;


function preload(){
  bgImg = loadImage('assets/images/stealerBackground.png');
}

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(1280,720);
rectMode(CENTER);

stealer = new Stealer(width/2, height - 50);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  imageMode(CORNER);
  bgImg.resize(7250,720);
  image(bgImg, bgLeft, 0);

  handleKey();

  stealer.show();
}

function moveBgLeft(){
  let minBgLeft = - bgImg.width + width;

  if (bgLeft - moveSpeed > minBgLeft){
    bgLeft -= moveSpeed;
  }
}

function moveBgRight(){
  if(bgLeft + moveSpeed < 0){
    bgLeft += moveSpeed;
  }
}

function handleKey(){
  if(keyIsDown(LEFT_ARROW)){
    if(stealer.canMoveLeft()){
      stealer.moveLeft();
    } else {
      moveBgRight();
    }
  } else if (keyIsDown(RIGHT_ARROW)){
    if(stealer.canMoveRight()){
      stealer.moveRight();
    } else {
      moveBgLeft();
    }
  }
}
