/**************************************************
Inheritance Activity
Paola Petitti
**************************************************/
let state = `simulation`;

let pedestrian;

function setup() {
createCanvas(windowWidth, windowHeight);

let x = width/2;
let y = height;
pedestrian = new Pedestrian(x,y);
}


function draw() {
  background(0);

  if(state === `title`){
    title();
  }
  else if(state === `simulation`){
    simulation();
  }
  else if(state === `success`){
    success();
  }
  else if(state === `dead`){
    dead();
  }
}

function title(){
  displayText(`PEDESTRIAN PALAVER!`);
}

function simulation(){
  pedestrian.handleInput();
  pedestrian.move();
  pedestrian.display();
}

function success(){
displayText(`YOU MADE IT!`);
}

function dead(){
displayText(`YOU DIED!`);
}

function displayText(string){
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  text(string, width/2, height/2);
  pop();
}

function keyPressed(){
  if(state === `title`){
    state = `simulation`;
  }
}
