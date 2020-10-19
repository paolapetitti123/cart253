/**************************************************
Arrays Experiments
Paola Petitti

Following along with the lecture videos
**************************************************/

"use strict";

let images = [];
let displayImage;

function preload(){
  for (let i = 0; i < 10; i++){
    let sangyeonImages = loadImage(`assets/images/picture-${i}.png`);
    images.push(sangyeonImages);
  }

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  displayImage = random(images);
}


// draw()
// Moves and displays our fish
function draw() {
  background(0);

  push();
  imageMode(CENTER);
  image(displayImage,width/2,height/2);
  pop();
}
