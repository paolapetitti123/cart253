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
let bgImg;
let bgImg2;
let bgImg3;
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
  y: 448,
  width: 350,
  height: 172,
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

// Axe object
let axeImg;
let numOfAxes = 9;
let axes = [];

// Metal Bar object
let metalBars = [];
let numOfBars = 9;

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
let lvlOne;
let lvlTwo;
let lvlThree;

// laser stuff for level 2
let lasers = [];
let numLasers = 10;

// Mic stuff
let mic;

/*
  Loading all the images and music!
*/
function preload() {
  bgImg = loadImage("assets/images/stealerBackground.png");
  bgImg2 = loadImage("assets/images/stealerBackground2.png");
  bgImg3 = loadImage("assets/images/stealerBackground3.png");
  heartImg = loadImage("assets/images/diamondHeart.png");
  doorImg = loadImage("assets/images/door.png");
  heartStolenImg = loadImage("assets/images/diamondHeartStolen.png");
  crateImg = loadImage("assets/images/crate.png");
  axeImg = loadImage("assets/images/axe.gif");
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
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();
  stealer = new Stealer(100, height + 50);
  lvlOne = new LevelOne(bgLeft, bgImg, crateImg, heartLivesImg, transparentImg);
  lvlTwo = new LevelTwo(
    bgLeft,
    bgImg2,
    crateImg,
    heartLivesImg,
    transparentImg
  );
  lvlThree = new LevelThree(
    bgLeft,
    bgImg3,
    crateImg,
    heartImg,
    axeImg,
    heartLivesImg,
    transparentImg
  );
  let x = bgLeft + 800;
  let y = 200;

  for (let i = 0; i < numOfAxes; i++) {
    let axe = new Axe(x, y, axeImg);
    x += 600;
    axes.push(axe);
  }

  for (let i = 0; i < numOfBars; i++) {
    let x = undefined;
    let y = undefined;
    let bar = new Bar(x, y);
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
  if (level == 1) {
    lvlOne.backgroundMove();
    lvlOne.crateShow();
    lvlOne.displayDoor();
    stealer.move();
    handleKey();
    lvlOne.barShow();
    lvlOne.showLives();
  } else if (level == 2) {
    lvlTwo.backgroundMove();
    lvlTwo.crateShow();
    addLasers();
    lvlTwo.displayLasers();
    stealer.move();
    handleKey();
    lvlTwo.displayDoor();
    lvlTwo.showLives();
  } else if (level == 3) {
    lvlThree.backgroundMove();
    stealer.move();
    handleKey();
    lvlThree.displayAxe();
    lvlThree.displayDiamond();
    lvlThree.showLives();
  }
}

/*
  Function to see which arrow keys are being held down to move
  the background & character
*/
function handleKey() {
  if(difficulty === 1 || difficulty === 2 || difficulty === 3){
    if (keyIsDown(LEFT_ARROW)) {
      if (stealer.canMoveLeft()) {
        stealer.moveLeft();
        display(robberWalkImg, stealer.size2 + padding, stealer.size);
      } else {
        if (level == 1) {
          lvlOne.moveBgRight();
        } else if (level == 2) {
          lvlTwo.moveBgRight();
        } else if (level == 3) {
          lvlThree.moveBgRight();
        }
        display(robberWalkImg, stealer.size2 + padding, stealer.size);
      }
    } else if (keyIsDown(RIGHT_ARROW)) {
      if (stealer.canMoveRight()) {
        stealer.moveRight();
        display(robberWalkImg, stealer.size2 + padding, stealer.size);
      } else {
        if (level == 1) {
          lvlOne.moveBgLeft();
        } else if (level == 2) {
          lvlTwo.moveBgLeft();
        } else if (level == 3) {
          lvlThree.moveBgLeft();
        }
        display(robberWalkImg, stealer.size2 + padding, stealer.size);
      }
    } else {
      display(robberStandImg, stealer.size2, stealer.size);
    }
  }
  else if (difficulty === 4){
    let level = mic.getLevel();

    if (keyIsDown(LEFT_ARROW)) {
      if (stealer.canMoveLeft()) {
        stealer.moveLeft();
        display(robberWalkImg, stealer.size2 + padding, stealer.size);
      } else {
        if (level == 1) {
          lvlOne.moveBgRight();
        } else if (level == 2) {
          lvlTwo.moveBgRight();
        } else if (level == 3) {
          lvlThree.moveBgRight();
        }
        display(robberWalkImg, stealer.size2 + padding, stealer.size);
      }
    } else if (level >= 0.01 && level < 0.5) {
      if (stealer.canMoveRight()) {
        stealer.moveRight();
        display(robberWalkImg, stealer.size2 + padding, stealer.size);
      } else {
        if (level == 1) {
          lvlOne.moveBgLeft();
        } else if (level == 2) {
          lvlTwo.moveBgLeft();
        } else if (level == 3) {
          lvlThree.moveBgLeft();
        }
        display(robberWalkImg, stealer.size2 + padding, stealer.size);
      }
    } else {
      display(robberStandImg, stealer.size2, stealer.size);
    }
  }
}

/*
  Function to see if the UP arrow gets pressed once to jump
*/
function keyPressed() {
  let x = lvlOne.bgLeft + 800;
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
  else if (state == `diffSelect` && key == "4") {
    difficulty = 4;
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

function addLasers() {
  if (lasers.length < numLasers) {
    if (random() < 0.01) {
      let x = 1280;
      console.log("x = " + x);
      let y = random(300, 390);
      let laser = new Laser(x, y);
      lasers.push(laser);
    }
  } else if (lasers.length == numLasers) {
    numLasers += 10;
  }
}

/*
  The following 4 functions tell the program what to do for the start state,
  the difficulty select state, the win state and the lose state.
*/
function intro() {
  lvlOne.backgroundMove();
  lvlOne.crateShow();
  image(introImg, width / 2, height / 2);
}
function diffSelect() {
  lvlOne.backgroundMove();
  lvlOne.crateShow();
  image(diffImg, width / 2, height / 2);
}

function winEnding() {
  textSize(50);
  textAlign(CENTER);
  textFont("monospace");
  fill(253, 139, 255);
  let doorX = bgLeft + 6800;
  imageMode(CENTER);
  image(doorImg, doorX, door.y, door.height, door.width);
  text(`MISSON : SUCCESS`, width / 2, height / 2);
}
function loseEnding() {
  textSize(50);
  textAlign(CENTER);
  fill(0, 0, 0);
  textFont("monospace");
  text(`MISSION : FAILED`, width / 2, height / 2);
}
