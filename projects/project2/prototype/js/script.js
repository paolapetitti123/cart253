/**************************************************
Project 2: The Stealer Continued~
Paola Petitti

Things to fix/Add:
- Change the diamond to the door
- put all this code into levelOne.js (and make it work)
- create a level 2 that connects to the door of levelOne

You must jump over the metal bars that are coming out of the floor
to make it to the end of the level and steal the diamond heart. The player
can jump onto the boxes however you can't jump when your on a box.

The idea/concept for this is heavily inspired by
The Boyz - The Stealer music video
This is the link if you are interested in watching it
https://www.youtube.com/watch?v=c_e-IC0VwZM&ab_channel=THEBOYZ

Hit sound effect: https://freesound.org/people/CastIronCarousel/sounds/216783/
Gameplay music: https://freemusicarchive.org/search?adv=1&quicksearch=Monplaisir%20Garage&&
Game win music: https://freemusicarchive.org/search?adv=1&quicksearch=Monplaisir%20Victory&&
Game over sound: https://freesound.org/people/Euphrosyyn/sounds/442127/

All the art (background, sprites, crates/boxes) was done by me
**************************************************/
// Background variables
let bgImg1;
let bgImg2;
let bgLeft = 0;
let bottom = 0;
let cieling = -496;

// User variables
let moveSpeed = 15;
let robberStandImg;
let robberWalkImg;
let padding = 10;


// door variables
let doorImg;
let door = {
  x: 7000,
  y: 448,
  sizeW: 350,
  sizeH: 172,
};

// diamond variable declarations
let heartImg;
let heartStolenImg;
let heartD = {
  x: 7000,
  y: 448,
  size: 350,
};

// Crate objects
let crateImg;
let crate = {
  x: undefined,
  y: 547,
  sizeX: 150,
  sizeY: 150,
  size: 150,
};

// Metal Bar object
let metalBars = [];
let numOfBars = 9;
let minBars = 0;

// Game Lives variables
let livesCounter = 3;
let heartLivesImg;

// Audio related variables
let gameMusic;
let gameWin;
let gameOver;
let punchSound;

// Intro related variables (imgs, states, difficulty)
let introImg;
let state = "start";
let difficulty = 0;
let diffImg;

let level = 1;

/*
  Loading all the images and music!
*/
function preload() {
  bgImg = loadImage("assets/images/stealerBackground.png");
  bgImg2 = loadImage("assets/images/stealerBackground2.png");
  heartImg = loadImage("assets/images/diamondHeart.png");
  doorImg = loadImage("assets/images/door.png");
  heartStolenImg = loadImage("assets/images/diamondHeartStolen.png");
  crateImg = loadImage("assets/images/crate.png");
  robberStandImg = loadImage("assets/images/stealer/robber-standing.gif");
  robberWalkImg = loadImage("assets/images/stealer/robber-walking.gif");
  heartLivesImg = loadImage("assets/images/stealer/heart.png");
  transparentImg = loadImage("assets/images/stealer/transparent.png");
  introImg = loadImage("assets/images/introScreen.png");
  diffImg = loadImage("assets/images/selectDifficulty.png");

  gameMusic = loadSound("assets/sounds/Monplaisir_-_02_-_Garage.mp3");
  gameWin = loadSound("assets/sounds/Monplaisir_-_08_-_Victory.mp3");
  gameOver = loadSound("assets/sounds/gameOver.wav");
  punchSound = loadSound("assets/sounds/punch.mp3");
}

/*
  Initializing stealer object, creating canvas and setting the
  volume for the sounds.
*/
function setup() {
  createCanvas(1280, 720);
  stealer = new Stealer(100, height + 50);

  for(let i = 0; i < numOfBars; i++){
    let x = undefined;
    let y = undefined;
    let bar = new Bar(x,y);
    metalBars.push(bar);
  }


  gameMusic.setVolume(0.5);
  gameOver.setVolume(0.2);
  gameWin.setVolume(0.3);
}

/*
  Shows background, tells game which state to enter
*/
function draw() {
  if (state === `start`) {
    intro();
  } else if (state === `diffSelect`) {
    diffSelect();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `winEnding`) {
    winEnding();
  } else if (state === `loseEnding`) {
    loseEnding();
  }
}

/*
  This function calls all the functions needed to make the game run!
*/
function simulation() {
  if(level == 1){
    backgroundMove();
    crateShow();
    displayDoor();
    stealer.move();
    handleKey();
    barShow();
    showLives();
  }
  else if(level == 2){
    backgroundMoveLevel2();
    bgLeft = 0;
    crateShow();
    stealer.move();
    handleKey();
    barShow();
    showLives();
  }

}

/*
  Functions to move the background
*/
function backgroundMove() {
  imageMode(CORNER);
  bgImg.resize(7250, 720);
  image(bgImg, bgLeft, 0);
}
function backgroundMoveLevel2() {
  imageMode(CORNER);
  bgImg2.resize(7250, 720);
  image(bgImg2, bgLeft, 0);
}
function moveBgLeft() {
  let minBgLeft = -bgImg.width + width;

  if (bgLeft - moveSpeed > minBgLeft) {
    bgLeft -= moveSpeed;
  }
}
function moveBgLeft2() {
  let minBgLeft = -bgImg2.width + width;

  if (bgLeft - moveSpeed > minBgLeft) {
    bgLeft -= moveSpeed;
  }
}
function moveBgRight() {
  if (bgLeft + moveSpeed < 0) {
    bgLeft += moveSpeed;
  }
}



/*
  Function to see which arrow keys are being held down to move
  the background & character
*/
function handleKey() {
  if (keyIsDown(LEFT_ARROW) && level == 1) {
    if (stealer.canMoveLeft()) {
      stealer.moveLeft();
      display(robberWalkImg, stealer.size2 + padding, stealer.size);
    } else {
      moveBgRight();
      display(robberWalkImg, stealer.size2 + padding, stealer.size);
    }
  } else if (keyIsDown(RIGHT_ARROW) && level == 1) {
    if (stealer.canMoveRight()) {
      stealer.moveRight();
      display(robberWalkImg, stealer.size2 + padding, stealer.size);
    } else {
      moveBgLeft();
      display(robberWalkImg, stealer.size2 + padding, stealer.size);
    }
  }
    else {
    display(robberStandImg, stealer.size2, stealer.size);
  }
}

/*
  Function to see if the UP arrow gets pressed once to jump
*/
function keyPressed() {
  let x = bgLeft + 800;
  let y = 622;
  if (keyCode === UP_ARROW) {
    stealer.jump();
  } else if (keyCode === ENTER && state == `start`) {
    state = `diffSelect`;
  } else if (state == `diffSelect` && key == "1") {
    difficulty = 1;
    state = `simulation`;
    gameMusic.play();
  } else if (state == `diffSelect` && key == "2") {
    difficulty = 2;
    state = `simulation`;
    gameMusic.play();
  } else if (state == `diffSelect` && key == "3") {
    difficulty = 3;
    state = `simulation`;
    gameMusic.play();
  }
}

/*
  Function that changes the gif being displayed
*/
function display(picture, width, height) {
  imageMode(CENTER);
  image(picture, stealer.pos.x, stealer.pos.y, width, height);
}

/*
  Displaying the diamond at the end of the level that you need to reach in order
  to win the level.
*/
function displayDoor() {
  let doorX = bgLeft + 6800;
  imageMode(CENTER);
  image(doorImg, doorX, door.y, door.sizeH, door.sizeW);
  doorTouch(doorX);
}
function doorTouch(doorX) {
  if(
    stealer.pos.x + stealer.r / 6 > doorX - door.sizeW / 2 &&
    stealer.pos.x - stealer.r / 6 < doorX + door.sizeW / 2
  ){
    level = 2;
    endOfLevel1();
    gameMusic.stop();

  }
}

/*
  The following 4 crate functions show the crates, detect if you touch one & if
  you are currently on a crate, if you are on a crate the bars can't hurt you.
*/
function crateShow() {
  crate.x = bgLeft + 500;
  imageMode(CENTER);
  image(crateImg, crate.x, crate.y, crate.sizeX, crate.sizeY);
  crateTouch(crate.x);
  for (let j = 0; j < 5; j++) {
    crate.x += 1000;

    imageMode(CENTER);
    image(crateImg, crate.x, crate.y, crate.sizeX, crate.sizeY);
    crateTouch(crate.x);
  }
}
function crateTouch(crateX) {
  if (isCrateTouching(crateX)) {
    stealer.vy = 0;
    if (stealer.pos.y >= 520) {
      if (stealer.pos.x < crateX) {
        stealer.pos.x -= 15;
      } else {
        stealer.pos.x += 15;
      }
    } else if (stealer.pos.y < 520) {
      stealer.pos.x -= 0.01;
    }
  }
}
function isCrateTouching(crateX) {
  if (
    stealer.pos.x + stealer.r / 6 > crateX - crate.sizeX / 2 &&
    stealer.pos.x - stealer.r / 6 < crateX + crate.sizeX / 2 &&
    stealer.pos.y + stealer.r / 2 > crate.y - crate.sizeY / 2 &&
    stealer.pos.y - stealer.r / 2 < crate.y - crate.sizeY / 2
  ) {
    return true;
  }
}

/*
  The 5 following functions show the bars, detect if you hit one and
  what happens when you do hit one lose a life and get pushed back to try again
  so long as you haven't lost all your lives.
*/
function barShow() {
  let x = bgLeft + 800;
  let y = 622;

for (let i = 0; i < metalBars.length; i++) {
    let bar = metalBars[i];
    bar.display(x,y,bar.width, bar.height);
    bar.barTouch(stealer);
    x += 600;
    console.log(bar.x);

    if(bar.height <= bottom && bar.height > cieling){
      bar.grow();
    }
    else if(bar.height <= cieling && bar.height < bottom){
      bar.shrink();
    }
    else if(bar.height == 0){
      cieling = -496;
    }
  }

}



/*
  This function is to display how many lives the player has left.
*/
function showLives() {
  if (livesCounter == 3) {
    image(heartLivesImg, 50, 65, 25, 25);
    image(heartLivesImg, 80, 65, 25, 25);
    image(heartLivesImg, 110, 65, 25, 25);
  } else if (livesCounter == 2) {
    image(heartLivesImg, 50, 65, 25, 25);
    image(heartLivesImg, 80, 65, 25, 25);
  } else if (livesCounter == 1) {
    image(heartLivesImg, 50, 65, 25, 25);
  } else if (livesCounter == 0) {
    image(transparentImg, 50, 65, 25, 25);
  }
}

/*
  The following 4 functions tell the program what to do for the start state,
  the difficulty select state, the win state and the lose state.
*/
function intro() {
  backgroundMove();
  crateShow();
  image(introImg, width / 2, height / 2);
}
function diffSelect() {
  backgroundMove();
  crateShow();
  image(diffImg, width / 2, height / 2);
}
function endOfLevel1() {
  textSize(50);
  textAlign(CENTER);
  textFont("monospace");
  fill(253, 139, 255);
  let doorX = bgLeft + 6800;
  imageMode(CENTER);
  image(doorImg, doorX, door.y, door.sizeH, door.sizeW);
  reset();
  // text(`Level 2 loading...`, width / 2, height / 2);
}
function winEnding() {
  textSize(50);
  textAlign(CENTER);
  textFont("monospace");
  fill(253, 139, 255);
  let doorX = bgLeft + 6800;
  imageMode(CENTER);
  image(doorImg, doorX, door.y, door.sizeH, door.sizeW);
  text(`MISSON : SUCCESS`, width / 2, height / 2);
}
function loseEnding() {
  textSize(50);
  textAlign(CENTER);
  fill(0, 0, 0);
  textFont("monospace");
  text(`MISSION : FAILED`, width / 2, height / 2);
}


function reset(){
  stealer.pos.x = 100;
  livesCounter == 3;
  bgImg.width = bgImg.width;
  width = width;
}
