/**************************************************
Exercise 1: I like to move it move it
Paola Petitti

Write description!!
**************************************************/
// Variable declarations:
let bg = {
  red: 0,
  green: 0,
  blue: 0
};

// bottom snowman circle
let snowmanBottom = {
  x: 0,
  y: 335,
  size: 100,
  fill: 255,
  alpha: 255
}

// middle snowman circle
let snowmanMid = {
  x: 400,
  y: 200,
  size: 100,
  fill: 255,
  alpha: 255
}

// top snowman circle
let snowmanTop = {
  x:0,
  y:100,
  size: 100,
  fill: 255,
  alpha: 255
}

// snowman top hat
let snowmanHat = {
  x:0,
  x2: 0,
  y:42,
  y2: 25,
  size: 100,
  fill: 0,
  alpha: 255
}

// snowman button1
let button1 = {
  x: 400,
  y: 200,
  size: 25,
  fill: 0,
  alpha: 255
}

// snowman button2
let button2 = {
  x: 400,
  y: 170,
  size: 25,
  fill: 0,
  alpha: 255
}


// setup()
//
// Setting up the canvas
function setup() {
  createCanvas(400,400);
  noStroke();

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(mouseX,bg.green, mouseY);

// Snowman bottom circle
  snowmanBottom.x += 1;
  snowmanBottom.x = constrain(snowmanBottom.x,0,width/2);
  snowmanBottom.size += 1;
  snowmanBottom.size = constrain(snowmanBottom.size,0, width/2);
  fill(snowmanBottom.fill, snowmanBottom.alpha);
  ellipse(snowmanBottom.x,snowmanBottom.y, snowmanBottom.size);

// Snowman middle circle
  snowmanMid.x += -1;
  snowmanMid.x = constrain(snowmanMid.x, width/2, width);
  snowmanMid.size += 1;
  snowmanMid.size = constrain(snowmanMid.size,0, width/3);
  fill(snowmanMid.fill, snowmanMid.alpha);
  ellipse(snowmanMid.x,snowmanMid.y, snowmanMid.size);

  // Snowman top circle
  snowmanTop.x += 1;
  snowmanTop.x = constrain(snowmanTop.x,0,width/2);
  snowmanTop.size += 1;
  snowmanTop.size = constrain(snowmanTop.size,0, width/4);
  fill(snowmanTop.fill, snowmanTop.alpha);
  ellipse(snowmanTop.x,snowmanTop.y, snowmanTop.size);


  // Snowman hat bottom piece
  snowmanHat.x += 1;
  snowmanHat.x = constrain(snowmanHat.x,0,width/2);
  snowmanHat.size += 1;
  snowmanHat.size = constrain(snowmanHat.size,0, width/4);
  fill(snowmanHat.fill, snowmanHat.alpha);
  rectMode(CENTER);
  rect(snowmanHat.x,snowmanHat.y,65,15);

  // Snowman hat top piece
  snowmanHat.x2 += 1;
  snowmanHat.x2 = constrain(snowmanHat.x2,0,width/2);
  snowmanHat.size += 1;
  snowmanHat.size = constrain(snowmanHat.size,0, width/4);
  fill(snowmanHat.fill, snowmanHat.alpha);
  rectMode(CENTER);
  rect(snowmanHat.x2,snowmanHat.y2,45,45);

  // Snowman buttons
  button1.x += -1;
  button1.x = constrain(button1.x, width/2, width);
  button1.size += 1;
  button1.size = constrain(button1.size,0, width/24);
  button1.fill = map(button1.x, 255, width, 0, 255);
  fill(button1.fill);
  ellipse(button1.x,button1.y, button1.size);

  button2.x += -1;
  button2.x = constrain(button2.x, width/2, width);
  button2.size += 1;
  button2.size = constrain(button2.size,0, width/24);
  button2.fill = map(button2.x, 255, width, 0, 255);
  fill(button2.fill);
  ellipse(button2.x,button2.y, button2.size);

}
