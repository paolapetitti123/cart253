/**************************************************
Sound experiments
Paola Petitti
**************************************************/
"use strict";
let mic;
let ghost = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  image: undefined
};

function preload(){
  ghost.image = loadImage(`assets/images/clown.png`);
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600,600);

  ghost.x = width/2;
  ghost.y = height/2;

  mic = new p5.AudioIn();
  mic.start();

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // trembling
  ghost.x += random(-1,1);
  ghost.y += random(-1,1);

  // volume into mic
  let level = mic.getLevel();

  // is ghost scared
  if(level > 0.6){
    ghost.vx = 20;
  }

  //move ghost
  ghost.x += ghost.vx;
  ghost.y += ghost.vy;

  push();
  imageMode(CENTER);
  tint(255,50);
  image(ghost.image, ghost.x, ghost.y);
  pop();
}
