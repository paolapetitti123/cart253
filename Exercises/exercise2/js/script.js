/**************************************************
Exercise 2: Dodge-em
Paola Petitti

Roald has to collect bells and avoid getting hit by cans!
**************************************************/
// Variable declarations
var x1 = 0;
var x2;
var scrollSpeed = 10;
var pointCounter = 0;
let bellCounter = 0;
var bgImg;
let roaldImg;
let canImg;
let can = {
  x: 1280,
  y: 600,
  vx: 0,
  vy: 0,
  size: 50,
  speed: 10,
  image: canImg
};
var bellImg;
let bells = {
  x: 1520,
  y: 600,
  vx: 0,
  vy: 0,
  size: 50,
  speed: 10,
  image: bellImg
}
let myMusic;
let gameOverMusic;
let bellMusic;
var fade;
var fadeAmonut = 1;

// preload()
//
// Description of preload() goes here.
function preload(){
  // setting up music
  myMusic = loadSound('assets/sounds/buttercup.mp3');
  gameOverMusic = loadSound('assets/sounds/game over.mp3');
  bellMusic = loadSound('assets/sounds/glee.mp3');

  // setting up images
  bgImg = loadImage('assets/images/animalCrossingBg.png');
  roaldImg = loadImage('assets/images/roald.png');
  canImg = loadImage('assets/images/can.png');
  bellImg = loadImage('assets/images/bells.png');
}

// setup()
//
// Description of setup() goes here.
function setup() {
  fade = 255;
  createCanvas(1280,720);
  roald = new Roald();

  // setting up can
  can.vx = can.speed;

  // setting up bells
  bells.vx = bells.speed;

  // setting up background
  x2 = width;
}


// draw()
//
// Description of draw() goes here.
function draw() {
  push();
    imageMode(CORNER);
    image(bgImg, x1, 0, width, height);
    image(bgImg, x2, 0, width, height);

    // trying to loop the background
    x1 -= scrollSpeed;
    x2 -= scrollSpeed;

    if(x1 < -width){
      x1 = x2 + width;
    }
    if(x2 < -width){
      x2 = x1 + width;
    }
  pop();

  imageMode(CENTER);
  // can movement
  can.x -= can.vx;

  // bells movement
  bells.x -= bells.vx;

  // checking if can goes off screen
  if(can.x < 0){
    can.x = 1280;
  }

  if(bells.x < 0){
    bells.x = 1520;
  }

  // checking if roald touches can
  let d = dist(roald.x, roald.y, can.x,can.y);
  if(d < can.size/2 + roald.size/2)
  {
    myMusic.stop();
    gameOverMusic.play();
    noLoop();
  }

  // checking if roald touches bells
  let bellD = dist(roald.x, roald.y, bells.x,bells.y);
  if(bellD < bells.size/2 + roald.size/2)
  {
    bells.x = 1280 + random(300, 1000);
    pointCounter += 100;
    bellMusic.play();
  }

  // displaying can & bells
  image(canImg, can.x, can.y, can.size, can.size + 25);
  image(bellImg, bells.x, bells.y, bells.size, bells.size +20);

  // displaying roald
  roald.show();
  roald.move();

  // Displaying the point counter
  push();
  image(bellImg, 30, 35, bells.size, bells.size + 20);
  noStroke();
  fill(0);
  textSize(50);
  textAlign(LEFT);
  text(pointCounter, 70, 55);
  pop();

  textSize(25);
  textAlign(LEFT);
  fill(0,0,0, fade);
  text("press spacebar to jump over cans", width/2, 55);
  if(fade > 255)
  {
    fadeAmonut = -1;
  }
  fade += fadeAmonut;

}


function keyPressed() {
  if (key === ' '){
    roald.jump();
    if(!myMusic.isPlaying() && !gameOverMusic.isPlaying())
      {
        myMusic.play();
      }
    }
  }
