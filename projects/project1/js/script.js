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
var dHeart;


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
// shows background, & diamond heart (diamond heart needs to stay in place)
function draw() {
  background(0);
  backgroundMove();
  heartDiamond();
  //hrtTouch();

  handleKey();
  stealer.display();
}

function backgroundMove(){
  imageMode(CORNER);
  bgImg.resize(7250,720);
  image(bgImg, bgLeft, 0);
}

function heartDiamond(){
  let hrtX = bgLeft + 7000;
  imageMode(CENTER);
  //heartImg.resize(350,350);
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

// Function to see which keys are being held down.
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

function keyPressed(){
  if(key === ' '){
    var jump = createVector(0, -1);
  }
}

function hrtTouch(heartX){
  let d = dist(stealer.pos.x, stealer.pos.y, heartX, heartD.y);
  if(d < stealer.size/2 + heartD.size/2){
    console.log("TOUCHING");
  }
}
