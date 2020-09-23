/**************************************************
Activity 4: Dodging Covid 19
Paola Petitti

Making a simulation of dodging covid-19
**************************************************/
// Variable declarations
let covid = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
}

let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: 255

}

let numStatic = 5000;

// setup()
//
// Creating the canvas, and setting the covid y-position to be random
// and setting the x-velocity to be the speed.
function setup() {
  createCanvas(windowWidth,windowHeight);

  covid.y = random(0,height);
  covid.vx = covid.speed;
  noCursor();
}

// draw()
//
// create 2 circles; one for covid the other for user. When the user touches
// covid then the simulation stops.
function draw() {
  background(0);

  // display static
  push();
  for(let i = 0; i < numStatic;i++){
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x,y);
  }
  pop();

  // Velocity of the covid circle
  covid.x += covid.vx;
  covid.y += covid.vy;

  // If statement to reset the covid circle
  if (covid.x > width){
    covid.x = 0;
    covid.y = random(0,height);
  }

  // user movement
  user.x = mouseX;
  user.y = mouseY;

  // check if covid touches user
  let d = dist(user.x,user.y,covid.x,covid.y);
  if(d < covid.size/2 + user.size/2) {
    noLoop();
  }

  // displaying covid circle
  fill(covid.fill.r,covid.fill.g,covid.fill.b);
  ellipse(covid.x,covid.y,covid.size);

  // user display
  fill(user.fill);
  ellipse(user.x,user.y,user.size);
}
