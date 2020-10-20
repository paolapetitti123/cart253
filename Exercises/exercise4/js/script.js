/**************************************************
Exercise 4: Fish tank
Paola Petitti

Feeding the fish simulator
**************************************************/

"use strict";

let school = [];
let schoolSize = 5;
let fishImage;

function preload(){
  fishImage = loadImage(`assets/images/FISH.png`);
}


function setup() {
  createCanvas(600, 600);

  for (let i = 0;i < schoolSize; i++){
    let fish = createFish(random(0, width), random(0, height), random(50,75));
    school.push(fish);
  }

}

// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y, size) {
  let fish = {
    x: x,
    y: y,
    size: size,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return fish;
}

// draw()
// Moves and displays our fish
function draw() {
  background(0,0,255);

  for (let i = 0;i < school.length; i++){
    moveFish(school[i]);
    displayFish(school[i]);
  }
}

// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  // fill(200, 100, 100);
  // noStroke();
  image(fishImage, fish.x, fish.y, fish.size, fish.size);
  // ellipse(fish.x, fish.y, fish.size);
  pop();
}

function mousePressed(){
  let fish = createFish(mouseX,mouseY);
  school.push(fish);
}
