/**************************************************
Exercise 03: Love, actually
Paola Petitti

fans of a celebrity chasing you(the celeb) if a fan touches/reaches
the you(celeb) game over, if you(celeb) runs off screen you win.

For reference, I created the background in Adobe illustrator
but the characters were made using this website
http://www.avatarsinpixels.com/ to save me some time
**************************************************/
//Variable declarations
let bgImg;
let celebImg;
let celeb = {
  x: 1000,
  y: 600,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  img: celebImg
};
let fan1Img;
let fan1 = {
  x: 0,
  y: 600,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 6,
  img: fan1Img
};
let fan2Img;
let fan2 = {
  x: 50,
  y: 600,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 6,
  img: fan2Img
};
let fan3Img;
let fan3 = {
  x: 100,
  y: 600,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 6,
  img: fan3Img
};
let x1 = 0;
let x2;
let scrollSpeed = 5;
let state = `title`;
var fade;
var fadeAmonut = 1;

// Loading all the images into their variables
function preload(){
  bgImg = loadImage('assets/images/background.png');
  celebImg = loadImage('assets/images/celeb.png');
  fan1Img = loadImage('assets/images/fan1.png');
  fan2Img = loadImage('assets/images/fan2.png');
  fan3Img = loadImage('assets/images/fan3.png');
}

// Description of setup() goes here.
function setup() {
  createCanvas(1280,720);
  fade = 255;
  x2 = width;
  setupFans();
}

// Setting up the velocities of the fans to random values between 0
// and the speed I specified in the fan objects
function setupFans(){
  fan1.vx = random(2, fan1.speed);
  fan2.vx = random(1, fan2.speed);
  fan3.vx = random(3, fan3.speed);
}

// Description of draw() goes here.
function draw() {
  backdrop();

  if(state === `title`){
    title();
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

// Calling the functions to make fans move, check off screen or touching,
// and displays the images.
function simulation(){
  fanMove();
  checkOffscreen();
  checkTouch();
  display();
}

// Tells users to press any key to start the game
function title(){
  push();
  textSize(65);
  fill(255,133,210);
  textAlign(CENTER,CENTER);
  text(`Press Any Key to start`,width/2,height/2);
  pop();
}

// Message for when you win the game
function winEnding(){
  push();
  textSize(65);
  textStyle(BOLD);
  fill(255,77,115);
  textAlign(CENTER,CENTER);
  text(`Congrats you out ran the fans!`,width/2,height/2);
  pop();
}

// Message for when you lose the game
function loseEnding(){
  push();
  textSize(65);
  textStyle(BOLD);
  fill(77,82,255);
  textAlign(CENTER,CENTER);
  text(`Oh no the fans caught up to you!`,width/2,height/2);
  pop();
}

// Gets the background image to loop while moving L
function backdrop(){
  imageMode(CORNER);
  image(bgImg ,x1, 0, width, height);
  image(bgImg ,x2, 0, width, height);

  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  if(x1 < -width){
    x1 = x2 + width;
  }
  if(x2 < -width){
    x2 = x1 + width;
  }
}

// functino to make the fans move forward along the x position
function fanMove(){
  fan1.x += fan1.vx;
  fan2.x += fan2.vx;
  fan3.x += fan3.vx;
}

// checks to see if the celeb made it off the screen
function checkOffscreen(){
  if(celeb.x >= width){
    state = `winEnding`;
  }
}

// changes the state to lose if a fan has made it to the celeb
function checkTouch(){
  if(isTouching(fan1) || isTouching(fan2) || isTouching(fan3)){
    state = `loseEnding`;
  }
}
// checks to see if a fan touched the celeb
function isTouching(fan){
  let d = dist(celeb.x, celeb.y,fan.x,fan.y);
  if(d < celeb.size/2 + fan.size/2){
    return true;
  }
}

// Tells the program what to do depending on which key is pressed in which state
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    celeb.x += 8;
  }
  else if(state === `title`){
    state = `simulation`;
  }
}

// Displays the images
function display(){
  image(fan1Img, fan1.x,fan1.y,fan1.size,fan1.size);
  image(fan2Img, fan2.x,fan2.y,fan2.size,fan2.size);
  image(fan3Img, fan3.x,fan3.y,fan3.size,fan3.size);
  image(celebImg, celeb.x,celeb.y,celeb.size,celeb.size);

  textSize(25);
  textStyle(BOLD);
  fill(0,0,0, fade);
  textAlign(CENTER,CENTER);
  text(`keep pressing right arrow key to move`,width/2,55);
  if(fade > 255){
    fadeAmonut = -3;
  }
  fade += fadeAmonut;
}
