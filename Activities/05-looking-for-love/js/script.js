/**************************************************
Activity 05: Looking for love
Paola Petitti

Two circles that move randomly, if they touch they are in love
if one goes off screen then the sim. ends in sadness
**************************************************/
//Variable Declarations
let circle1 = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5
};
let circle2 = {
  x: undefined,
  y: undefined,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5
};
let state = `title`; // other possibilities: title, love or sadness

// setup()
//
// Setting up the circles x & y positions & their velocity
function setup() {
  createCanvas(windowWidth,windowHeight);
  setupCircles();
}

// Setting up the necessary info for the circles
function setupCircles(){
  // Circle x positions (separated from eachother)
  circle1.x = width/3;
  circle2.x = 2 * (width/3);

  // Circle y positions (halfway down the canvas)
  circle1.y = height/2;
  circle2.y = height/2;

  // Setting circle velocity at random values to move in random direction (X)
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);

  // Setting circle velocity at random values to move in random direction (Y)
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}

// Displays background color, and tells program what to do for different states
function draw() {
  background(0);

  if(state === `title`){
    title();
  }
  else if(state === `simulation`){
    simulation();
  }
  else if(state === `love`){
    love();
  }
  else if(state === `sadness`){
    sadness();
  }

}

// Displays the title screen
function title(){
  push();
  textSize(65);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`LOVE?`,width/2,height/2);
  pop();
}

// Code that starts the simulation/program
function simulation(){
  move();
  checkOffScreen();
  checkOverlap();
  display();
}

// Displays text if love wins
function love(){
  push();
  textSize(65);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`THEY ARE IN LOVE`,width/2,height/2);
  pop();
}

// Displays text if sadness wins
function sadness(){
  push();
  textSize(65);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`Oh no sadness won`,width/2,height/2);
  pop();
}

// Code that makes the circles x & y positions moving
function move(){
    // Circle 1 movement
    circle1.x += circle1.vx;
    circle1.y += circle1.vy;

    // Circle 2 movement
    circle2.x += circle2.vx;
    circle2.y += circle2.vy;
  }

// tells program what to do if circle is off screen
function checkOffScreen(){
    if(isOffScreen(circle1) || isOffScreen(circle2)){
      state = `sadness`;
    }
  }

// checks if one of the circles moves off screen
function isOffScreen(circle){
  if(circle.x < 0 || circle.x > width || circle.y < 0, circle.y > height)
  {
    return true;
  }
  else {
    return false;
  }
}

// checks if the circles overlap
function checkOverlap(){
  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
    if(d < circle1.size/2 + circle2.size/2){
      state = `love`;
    }
  }

// makes 2 circles be displayed
function display(){
    // Displaying the circles
    ellipse(circle1.x,circle1.y,circle1.size);
    ellipse(circle2.x,circle2.y,circle2.size);
}

// checks if mouse is clicked in title screen
function mousePressed(){
  if(state === `title`){
    state = `simulation`;
  }
}
