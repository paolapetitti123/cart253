/**************************************************
Exercise 2: Dodge-em
Paola Petitti

Dog collecting treats, game stops if it touches chocolate
**************************************************/
// Variable declarations
var pointCounter = 0;
let bellCounter = 0;
var bgImg;

// new variables for new idea
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
let bellImg;
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
// preload()
//
// Description of preload() goes here.
function preload(){
  bgImg = loadImage('assets/images/animalCrossingBg.png');
  roaldImg = loadImage('assets/images/roald.png');
  canImg = loadImage('assets/images/can.png');
  bellImg = loadImage('assets/images/bells.png');

  soundFormats('mp3');
  myMusic = loadSound('assets/sounds/buttercup.mp3');
  gameOverMusic = loadSound('assets/sounds/game over.mp3');
}

// setup()
//
// Description of setup() goes here.
function setup() {
  myMusic.play();
  createCanvas(1280,720);
  roald = new Roald();

  // setting up can
  can.vx = can.speed;

  // setting up bells
  bells.vx = bells.speed;


}

function keyPressed() {
  if (key === ' '){
    roald.jump();
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  imageMode(CENTER);
  image(bgImg, width/2, height/2, width, height);

  // can movement
  can.x -= can.vx;

  // bells movement
  bells.x -= bells.vx;

  // checking if can goes off screen
  if(can.x < 0){
    can.x = 1280;
    pointCounter++;
  }

  if(bells.x < 0){
    bells.x = 1520;
  }

  // checking if roald touches can
  let d = dist(roald.x, roald.y, can.x,can.y);
  if(d < can.size/2 + roald.size/2)
  {
    gameOverMusic.play();
    noLoop();
    myMusic.stop();

  }

  // checking if roald touches bells
  let bellD = dist(roald.x, roald.y, bells.x,bells.y);
  if(bellD < bells.size/2 + roald.size/2)
  {
    bells.x = 1280 + random(300, 1000);
    pointCounter += 100;
  }



  // displaying can & bells
  image(canImg, can.x, can.y, can.size, can.size + 25);
  image(bellImg, bells.x, bells.y, bells.size, bells.size +20);

  // displaying roald
  roald.show();
  roald.move();

  // Displaying the point counter
  noStroke();
  fill(255);
  textSize(50);
  textAlign(LEFT);
  text(pointCounter, width/2, height/2);







}
