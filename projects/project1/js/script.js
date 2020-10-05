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
let crateImg;
let crate = {
  x: 0,
  y: 595,
  sizeX: 150,
  sizeY: 150,
  size: 150
};
let robberStandImg;
let robberWalkImg;


// loading images
function preload(){
  bgImg = loadImage('assets/images/stealerBackground.png');
  heartImg = loadImage('assets/images/diamondHeart.png');
  crateImg = loadImage('assets/images/crate.png');
  robberStandImg = loadImage('assets/images/stealer/robber-stand.gif');
  robberWalkImg = loadImage('assets/images/stealer/robber-right-walk.gif');
}

// setup()
//
// Initializing stealer object and creating canvas.
function setup() {
  createCanvas(1280,720);
  stealer = new Stealer(100, height + 50);
}

// draw()
//
// shows background, diamond heart, now allows square to jump
function draw() {
  background(0);
  backgroundMove();
  heartDiamond();
  crateShow();
  //stealer.display();
  stealer.move();
  handleKey();
}

function backgroundMove(){
  imageMode(CORNER);
  bgImg.resize(7250,720);
  image(bgImg, bgLeft, 0);
}

// Displaying the diamond at the end of the level
function heartDiamond(){
  let hrtX = bgLeft + 7000;
  imageMode(CENTER);
  image(heartImg, hrtX, heartD.y,heartD.size, heartD.size);
  hrtTouch(hrtX);
}

function crateShow(){
  let crateX = bgLeft + 500;
  imageMode(CENTER);
  image(crateImg, crateX, crate.y,crate.sizeX, crate.sizeY);
    crateTouch(crateX);
  for(let j = 0; j < 5; j++){
    crateX += 1000;
    for(let i = 0; i < 5; i++){
      imageMode(CENTER);
      image(crateImg, crateX, crate.y,crate.sizeX, crate.sizeY);
  crateTouch(crateX);
    }
  }



  // imageMode(CENTER);
  // image(crateImg, crateX, crate.y,crate.sizeX, crate.sizeY);

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
      display(robberWalkImg);
    } else {
      moveBgRight();
      display(robberWalkImg);
    }
  }
  else if (keyIsDown(RIGHT_ARROW)){
    if(stealer.canMoveRight()){
      stealer.moveRight();
      display(robberWalkImg);
    }
    else {
      moveBgLeft();
      display(robberWalkImg);
      }
    }
    else {
      display(robberStandImg);
    }
}

// Function to see if the UP arrow gets pressed once to jump
function keyPressed(){
  if (keyCode === UP_ARROW){
    console.log(stealer.pos.y);
    stealer.jump();
  }
}

function display(picture){
  image(picture,stealer.pos.x, stealer.pos.y + 75, stealer.size, stealer.size);
}


function hrtTouch(heartX){
  let d = dist(stealer.pos.x, stealer.pos.y, heartX, heartD.y);
  if(d < stealer.size/2 + heartD.size/2){
    console.log("TOUCHING");
  }
}

function crateTouch(crateX){
  let d = dist(stealer.pos.x, stealer.pos.y, crateX, crate.y);
  if(d < stealer.r/2 + crate.size/2){
    stealer.vy = 0;
    if(stealer.pos.y >= 520){
      stealer.pos.x -= 15;
    }
    else if(stealer.pos.y < 520){
      stealer.pos.x -= 0.01;
    }
  }


}
