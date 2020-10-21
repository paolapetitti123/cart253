/**************************************************
Exercise 4: Fish tank
Paola Petitti

Feeding the fish simulator
**************************************************/

"use strict";

let school = [];
let schoolSize = 5;
let fishFood = [];
let amountOfFood = 1;
let fishImage;
let foodCounter = 0;
let foodLimit = 10;
let eatenCounter = 0;
let title = `FEED THE FISH SIMULATOR
PRESS SPACE TO START,
ENTER FOR INSTRUCTIONS`;
let instructions = `Click to drop food at the position
your mouse is located.
You have 1 minute to feed the fish,
and only 10 pieces of food to drop!

Press Space to start`;
let lost = `GAME OVER!`;
let win = `YOU WIN!`
let state = `start`;
let gameTimer = 30;


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

// draw()
// Moves and displays our fish, also allows food to be seen
function draw() {
  background(0,0,255);

  if(state === `start`){
    intro();
  }
  else if(state === `simulation`){
    simulation();
  }
  else if(state === `instructions`){
    gameInstructions();
  }
   else if(state === `winEnding`){
     gameWin();
   }
   else if(state === `loseEnding`){
     gameOver();
   }
}

function simulation(){
  fishLoop();
  foodLoop();
  showTimer();
  showEaten();
  console.log("Timer: " + gameTimer);
  if(frameCount % 60 == 0 && gameTimer > 0) {
    gameTimer--;
  }
  if(gameTimer == 0){
    state = `loseEnding`;
  }
}

// showEaten()
// Displays the amount of food the fish have eaten
function showEaten() {
  textSize(25);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  fill(253, 139, 255);
  text(`Eaten: ${eatenCounter}`,500,50);
}

// showTimer()
// Displays a timer in the top right corner
function showTimer(){
  textSize(25);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  fill(253, 139, 255);
  text(`Time: ${gameTimer}`,500,10);
}

// fishLoop()
// Loops through array of fish
function fishLoop(){
  for (let i = 0;i < school.length; i++)
  {
    moveFish(school[i]);
    displayFish(school[i]);
  }
}

// foodLoop()
// Loops through array of food
function foodLoop(){
  for(let i=0; i < fishFood.length; i++)
  {
    displayFood(fishFood[i]);
    moveFood(fishFood[i]);

    for(let j = 0; j < school.length; j++){
      fishEating(school[j],fishFood[i]);

    }


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

// createFood(x)
//This function creates the fish food at mouseX (y position above the canvas)
function createFood(x){
  let food = {
    x: x,
    y: random(-500,-10),
    size: 15,
    vx: 0,
    vy: 0,
    speed: 5,
    eaten: false
  };
  return food;
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
  fish.x = constrain(fish.x, 0, width - 70);
  fish.y = constrain(fish.y, 0, height - 20);
}

// moveFood(food)
// Getting the food to drop down
function moveFood(food){
  // change direction
  food.vy = -food.speed;

  // have the food drop
  food.y = food.y - food.vy;


  // constrain food to the tank
  food.y = constrain(food.y,-500,height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  imageMode(CENTER);
  image(fishImage, fish.x, fish.y, fish.size, fish.size - 10);
  pop();
}

// displayFood(food)
// Displays fish food on the canvas
function displayFood(food){
  if(!food.eaten){
    push();
    fill(97,56,26);
    noStroke();
    ellipse(food.x,food.y,food.size);
    pop();
  }
}

// fishEating(fish,food)
// Checks to see if any of the fish have eaten food
function fishEating(fish,food){
  let d = dist(fish.x, fish.y, food.x, food.y);
  if(d < fish.size/2 + food.size/2){
    food.eaten = true;
    food.x = 700;
    eatenCounter += 1;
    console.log("FOOD EATEN");
    console.log(eatenCounter);

    if(eatenCounter >= foodLimit){
      state = `winEnding`;
    }
  }
}

// mousePressed()
// When the mouse is pressed, the fish food will drop from the top of the tank
function mousePressed(){
  if (foodCounter < foodLimit) {
    let food = createFood(mouseX);
    fishFood.push(food);
    foodCounter++;
   }
   else {
     console.log('maxed out');
   }
}

function keyPressed(){
  if(state === `start` && key == ' '){
    state = `simulation`;
  }
  else if(keyCode == ENTER && state === `start`){
    state = `instructions`;
  }
  else if(state === `instructions` && key == ' '){
    state = `simulation`;
  }
}

function intro(){
    textSize(35);
    textAlign(CENTER, CENTER);
    textFont("monospace");
    fill(253, 139, 255);
    text(title, width/2,height/2);
}

function gameInstructions(){
  textSize(25);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  fill(253, 139, 255);
  text(instructions, width/2,height/2);
}

function gameOver(){
  textSize(25);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  fill(253, 139, 255);
  text(lost, width/2,height/2);
  noLoop();
}

function gameWin(){
  textSize(25);
  textAlign(CENTER, CENTER);
  textFont("monospace");
  fill(253, 139, 255);
  text(win, width/2,height/2);
  noLoop();
}
