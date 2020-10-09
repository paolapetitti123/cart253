/**************************************************
Project 1: The Stealer
Paola Petitti

You must jump over the metal bars that are coming out of the floor
to make it to the end of the level and steal the diamond heart. The player
can jump onto the boxes however you can't jump when your on a box (I might try
changing that if time permits).

The idea/concept for this is heavily inspired by
The Boyz - The Stealer music video
This is the link if you are interested in watching it
https://www.youtube.com/watch?v=c_e-IC0VwZM&ab_channel=THEBOYZ
**************************************************/
/*
  Variable declarations
*/
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
  x: undefined,
  y: 547,
  sizeX: 150,
  sizeY: 150,
  size: 150
};
let robberStandImg;
let robberWalkImg;
let bar = {
  x: 0,
  y: 622,
  sizeX: 15,
  sizeY: 0
}
let bottom = 0;
let cieling = -496;
let livesCounter = 3;
let heartLivesImg;
let introImg;
let state = 'start';
let gameMusic;

// loading images
function preload(){
  bgImg = loadImage('assets/images/stealerBackground.png');
  heartImg = loadImage('assets/images/diamondHeart.png');
  crateImg = loadImage('assets/images/crate.png');
  robberStandImg = loadImage('assets/images/stealer/robber-standing.gif');
  robberWalkImg = loadImage('assets/images/stealer/robber-walking.gif');
  heartLivesImg = loadImage('assets/images/stealer/heart.png');
  transparentImg = loadImage('assets/images/stealer/transparent.png');
  introImg = loadImage('assets/images/introScreen.png');

  gameMusic = loadSound('assets/sounds/gameMusic.mp3');

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
  crateShow();
  if(state === `start`){
    intro();
  }
  else if(state === `simulation`){
    simulation();
  }
  else if(state === `winEnding`){
    winEnding();
  }
  else if(state === `loseEnding`){
    loseEnding();
  }
}

/*
  This function makes the game run!
*/
function simulation() {
  heartDiamond();
  stealer.move();
  handleKey();
  barShow();
  showLives();
}



/*
  Functions to move the background
*/
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

/*
  Function to see which keys are being held down to move the bg
*/
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

/*
  Function to see if the UP arrow gets pressed once to jump
*/
function keyPressed(){
  if (keyCode === UP_ARROW){
    stealer.jump();
  }
  else if(keyCode === ENTER){
    state = `simulation`;
    gameMusic.play();
  }
}

/*
  Function that changes the gif being displayed
*/
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
    state = `winEnding`;
  }
}

/*
  The following 4 crate functions show the crates, detect if you touch one & if
  you are currently on a crate, if you are on a crate the bars can't hurt you.
*/
function crateShow(){
  crate.x = bgLeft + 500;
  imageMode(CENTER);
    image(crateImg, crate.x, crate.y,crate.sizeX, crate.sizeY);
    crateTouch(crate.x);
  for(let j = 0; j < 5; j++){
    crate.x  += 1000;

      imageMode(CENTER);
      image(crateImg, crate.x, crate.y,crate.sizeX, crate.sizeY);
      crateTouch(crate.x);

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
function isCrateTouching(crateX){
  if(stealer.pos.x + stealer.r/2 > crateX - crate.sizeX/4 &&
    stealer.pos.x - stealer.r/2 < crateX + crate.sizeX/4 &&
    stealer.pos.y + stealer.r/2 >= crate.y - crate.sizeY/2  &&
    stealer.pos.y - stealer.r/2 <= crate.y - crate.sizeY/2){
      return true;
    }
 }
function isOnCrate(){
  if(stealer.pos.y + stealer.r/2 >= crate.y - crate.sizeY/2  &&
  stealer.pos.y - stealer.r/2 <= crate.y - crate.sizeY/2){
   console.log('TOUCH');
    return true;
  }
}

/*
  The 3 following functions show the bars, detect if you hit one and
  what happens when you do hit one lose a life and get pushed back to try again
  so long as you haven't lost all your lives.
*/
function barShow(){
  let barX = bgLeft + 800;
  fill(127);
  noStroke();
  rectMode(CORNER);

  for(let i = 0; i < 9; i++){
    rect(barX, bar.y, bar.sizeX, bar.sizeY);
    barTouch(barX,bar.sizeY,bar.y);
    barX += 600;

  }
  if(bar.sizeY <= bottom && bar.sizeY > cieling){
    shouldGrow();
  }

  if(bar.sizeY <= cieling && bar.sizeY <= bottom){
    shouldShrink();
  }
}
function shouldShrink(){
  console.log("SHRINKING");
  bar.sizeY += 20;

}
function shouldGrow(){
  console.log("GROWING");
  console.log(bar.sizeY);
  bar.sizeY -= 7;
}
/*
bottom = 0; cieling = -500;
*/

function barTouch(barX, barSizeY, barY){
  if (barIsTouching(barX, barSizeY, barY) && livesCounter >= 0)
  {
      stealer.pos.x -= 100;
      stealer.jump();
      livesCounter -= 1;
      fill(255,0,0,25);
      rectMode(CORNER);
      rect(0,0,1280,720);

  }
  else if (livesCounter < 0) {
    state = `loseEnding`;
  }


}
function barIsTouching(barX, barSizeY, barY){
  if (stealer.pos.x + stealer.size/2 > barX - bar.sizeX/2 &&
      stealer.pos.x - stealer.size/2 < barX + bar.sizeX/2 &&
      stealer.pos.y + stealer.size/2 > barY + barSizeY &&
      stealer.pos.y - stealer.size/2 < barY) {
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

/*
  The following 3 functions tell the program what to do for the start state,
  the win state and the lose state.

  Note to self:
  Change the win ending to still have the stand of the diamond just without
  the diamond in it and maybe change the music depending on the ending!
*/
function intro(){
  backgroundMove();
  crateShow();
  image(introImg, width/2, height/2);
}
function winEnding(){
  textSize(50);
  textAlign(CENTER);
  fill(253, 139, 255);
  text(`You stole the diamond!`, width/2, height/2);
}
function loseEnding(){
  textSize(50);
  textAlign(CENTER);
  fill(0,8,255);
  text(`Oh no, better luck next time!`, width/2, height/2);
}
