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
  y: 448,
  size: 350
}
let crateImg;
let crate = {
  x: 0,
  y: 547,
  sizeX: 150,
  sizeY: 150,
  size: 150
};
let robberStandImg;
let robberWalkImg;
let laser = {
  x: 0,
  y: 622,
  sizeX: 15,
  sizeY: 8
}
let livesCounter = 3;
let heartLivesImg;

// loading images
function preload(){
  bgImg = loadImage('assets/images/stealerBackground.png');
  heartImg = loadImage('assets/images/diamondHeart.png');
  crateImg = loadImage('assets/images/crate.png');
  robberStandImg = loadImage('assets/images/stealer/robber-standing.gif');
  robberWalkImg = loadImage('assets/images/stealer/robber-walking.gif');
  heartLivesImg = loadImage('assets/images/stealer/heart.png');
  transparentImg = loadImage('assets/images/stealer/transparent.png');
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
  stealer.move();
  handleKey();
  laserShow();
  showLives();
}




// Functions to move the background
function backgroundMove(){
  imageMode(CORNER);
  bgImg.resize(7250,720);
  image(bgImg, bgLeft, 0);
}
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
    stealer.jump();
  }
}

// Function that changes the gif being displayed
function display(picture){
  imageMode(CENTER);
  image(picture,stealer.pos.x, stealer.pos.y, stealer.size2, stealer.size);
}

/*
Displaying the diamond at the end of the level that you need to reach in order
to win the level.
*/
function heartDiamond(){
  let hrtX = bgLeft + 7000;
  imageMode(CENTER);
  image(heartImg, hrtX, heartD.y,heartD.size, heartD.size);
  hrtTouch(hrtX);
}
function hrtTouch(heartX){
  let d = dist(stealer.pos.x, stealer.pos.y, heartX, heartD.y);
  if(d < stealer.size/2 + heartD.size/2){
    console.log("TOUCHING");
  }
}

/*
The following 4 crate functions show the crates, detect if you touch one & if
you are currently on a crate, if you are on a crate the lasers can't hurt you.
*/
function crateShow(){
  let crateX = bgLeft + 500;
  imageMode(CENTER);
    image(crateImg, crateX, crate.y,crate.sizeX, crate.sizeY);
    crateTouch(crateX);
  for(let j = 0; j < 5; j++){
    crateX += 1000;

      imageMode(CENTER);
      image(crateImg, crateX, crate.y,crate.sizeX, crate.sizeY);
      crateTouch(crateX);

  }
}
function crateTouch(crateX){
  if(isCrateTouching(crateX)){
    console.log("TOUCH");
    stealer.vy = 0;
    if(stealer.pos.y >= 520){
      if(stealer.pos.x < crateX){
        stealer.pos.x -= 15;
      }
      else{
        stealer.pos.x += 15;
      }
    }
    else if(stealer.pos.y < 520){
      stealer.pos.x -= 0.01;
    }
   }
}
function isCrateTouching(crateX) {
if(stealer.pos.x + stealer.r/2 > crateX - crate.sizeX/4 &&
  stealer.pos.x - stealer.r/2 < crateX + crate.sizeX/4 &&
  stealer.pos.y + stealer.r/2 >= crate.y - crate.sizeY/2  &&
  stealer.pos.y - stealer.r/2 <= crate.y - crate.sizeY/2){
    return true;
  }
}
function isOnCrate(){
  if(stealer.pos.y < 520){
    return true;
  }
}

/*
The 3 following functions show the green lasers, detect if you hit one and
what happens when you do hit one lose a life and get pushed back to try again
so long as you haven't lost all your lives.
*/
function laserShow(){
  let laserX = bgLeft + 400;
  fill(123,223,105,50);
  noStroke();
  rectMode(CORNER);
  for(let i = 0; i < 9; i++){
    rect(laserX, laser.y, laser.sizeX, laser.sizeY);
    if(laserTouch(laserX,laser.sizeY,laser.y))
    {
      livesCounter -= 1;
      console.log(livesCounter);
    }
    // laserTouch(laserX,laser.sizeY,laser.y);
    laserX += 600;
  }
  // Speed of laser
  laser.sizeY -= 7;

  // Checks if laser hits top and restarts if it does.
  if(laser.sizeY < -500){
    laser.sizeY = 0;
  }


}
function laserTouch(laserX, laserSizeY, laserY){
  if (laserIsTouching(laserX, laserSizeY, laserY) && !isOnCrate() && livesCounter >= 0)
  {
      stealer.pos.x -= 100;
      stealer.jump();
      livesCounter -= 1;
      fill(255,0,0,25);
      rectMode(CORNER);
      rect(0,0,1280,720);
  }
  else if (livesCounter < 0) {
    console.log("GAME OVER");
  }


}
function laserIsTouching(laserX, laserSizeY, laserY){
  if (stealer.pos.x + stealer.size/2 > laserX - laser.sizeX/2 &&
      stealer.pos.x - stealer.size/2 < laserX + laser.sizeX/2 &&
      stealer.pos.y + stealer.size/2 > laserY + laserSizeY &&
      stealer.pos.y - stealer.size/2 < laserY) {
      return true;
    }
    else {
      return false;
    }
}


/*
This function is to display how many lives the player has left.
*/
function showLives(){
  fill(0);
  // textSize(25);
  // text(`Lives: ${livesCounter}`, 50, 65);
  if(livesCounter == 3){
    image(heartLivesImg, 50, 65, 25,25);
    image(heartLivesImg, 80, 65, 25,25);
    image(heartLivesImg, 110, 65, 25,25);
  }
  else if (livesCounter == 2){
    image(heartLivesImg, 50, 65, 25,25);
    image(heartLivesImg, 80, 65, 25,25);
  }
  else if(livesCounter == 1){
    image(heartLivesImg, 50, 65, 25,25);
  }
  else if(livesCounter == 0) {
    image(transparentImg, 50, 65, 25,25);
  }
  // image(heartImg,stealer.pos.x, stealer.pos.y, stealer.size2, stealer.size);
}
