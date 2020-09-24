/**************************************************
Exercise 2: Dodge-em
Paola Petitti

Dog collecting treats, game stops if it touches chocolate
**************************************************/
// Variable declarations
let dogImg;
let treatImg;
let chocolateImg;
var pointCounter = 0;
let treatCounter = 0;

let treat = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  image: treatImg
};

let dog = {
  x: 250,
  y: 250,
  size: 100,
  image: dogImg
};

let chocolate = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  image: chocolateImg
};

// preload()
//
// Description of preload() goes here.
function preload(){
  dogImg = loadImage('assets/images/dogEmoji.png');
  treatImg = loadImage('assets/images/dogTreat.png');
  chocolateImg = loadImage('assets/images/chocoEmoji.png');
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,windowHeight);

  // Setting up treat
  treat.y = random(0,height);
  treat.vx = treat.speed;

  // setting up chocolate
  chocolate.y = random(0,height);
  chocolate.vx = chocolate.speed;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  // Displaying the point counter
  noStroke();
  fill(255);
  textSize(50);
  textAlign(LEFT);
  text(pointCounter, width/2, height/2);

  // Dog movement
  dog.x = mouseX;
  dog.y = mouseY;

  // check if dog catches treat or chocolate
  let d = dist(dog.x,dog.y,treat.x,treat.y);
  if(d < treat.size/2 + dog.size/2) {
    treat.x = 0;
    treat.y = random(0,height);
    pointCounter++;
    // noLoop();
  }
  else if (treatCounter >= 3){
    noLoop();
  }


  // treat movement
  treat.x += treat.vx;
  treat.y += treat.vy;

  // chocolate movement
  

  // checking if treat goes off screen
  if (treat.x > width) {
    treat.x = 0;
    treat.y = random(0,height);
    treatCounter++;
  }

  // Displaying the dog, treat and chocolate
  imageMode(CENTER);
  image(dogImg, dog.x, dog.y,dog.size,dog.size);
  image(treatImg,treat.x,treat.y,treat.size);
  image(chocolateImg, chocolate.x, chocolate.y, chocolate.size, chocolate.size);
}
