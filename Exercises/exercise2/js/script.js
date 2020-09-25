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
var bgImg;

// new variables for new idea
let roaldImg;

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
  bgImg = loadImage('assets/images/animalCrossingBg.png');
  roaldImg = loadImage('assets/images/roald.png');
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(1280,720);
  roald = new Roald();
  // Setting up treat
  treat.y = random(0,height);
  treat.vx = treat.speed;

  // setting up chocolate
  chocolate.y = random(0,height);
  chocolate.vx = chocolate.speed;

  noCursor();
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
  // imageMode(CENTER);
  // image(bgImg, width/2, height/2, width, height);

  background(0);
  roald.show();
  roald.move();
  // Displaying the point counter
  noStroke();
  fill(255);
  textSize(50);
  textAlign(LEFT);
  text(pointCounter, width/2, height/2);

  // Dog movement
  dog.x = mouseX;
  dog.y = mouseY;

  // check if dog catches treat
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

  // check if dog touches chocolate
  let dis = dist(dog.x, dog.y, chocolate.x, chocolate.y);
  if(dis < chocolate.size/2 + dog.size/2){
    noLoop();
  }



  // treat movement
  treat.x += treat.vx;
  treat.y += treat.vy;

  // chocolate movement
  chocolate.x += chocolate.vx;
  chocolate.y += chocolate.vy;

  // checking if treat or choco goes off screen
  if (treat.x > width) {
    treat.x = 0;
    treat.y = random(0,height);
    treatCounter++;
  }
  else if (chocolate.x > width) {
    chocolate.x = 0;
    chocolate.y = random(0,height);
  }

  // Displaying the dog, treat and chocolate
  imageMode(CENTER);
  image(dogImg, dog.x, dog.y,dog.size,dog.size);
  image(treatImg,treat.x,treat.y,treat.size);
  image(chocolateImg, chocolate.x, chocolate.y, chocolate.size, chocolate.size);
}
