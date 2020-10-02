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
  x2 = width;
  setupFans();
}

function setupFans(){
  fan1.vx = random(0, fan1.speed);
  fan2.vx = random(0, fan2.speed);
  fan3.vx = random(0, fan3.speed);
}


// Description of draw() goes here.
function draw() {
  backdrop();
  simulation();
}

function simulation(){
  fanMove();
  checkOffscreen();
  checkTouch();
  display();
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

function fanMove(){
  fan1.x += fan1.vx;
  fan2.x += fan2.vx;
  fan3.x += fan3.vx;
}

function checkOffscreen(){
  if(celeb.x > width){
    state = `win`;
  }
}

function checkTouch(){
  if(isTouching(fan1) || isTouching(fan2) || isTouch(fan3)){
    state = `lose`;
  }
}

function isTouching(fan){
  let d = dist(celeb.x, celeb.y,fan.x,fan.y);
  if(d < celeb.size/2 + fan.size/2){
    return true;
  }
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    celeb.x -= 8;
  }
  else if(keyCode === RIGHT_ARROW){
    celeb.x += 8;
  }
}

function display(){
  image(fan1Img, fan1.x,fan1.y,fan1.size,fan1.size);
  image(fan2Img, fan2.x,fan2.y,fan2.size,fan2.size);
  image(fan3Img, fan3.x,fan3.y,fan3.size,fan3.size);
  image(celebImg, celeb.x,celeb.y,celeb.size,celeb.size);
}
