/**************************************************
Project 2: The Stealer Continued~
Paola Petitti

You must must avoid all the obstacles in each of the three levels and make
it to the end of the third level in order to steal the diamond heart. The player
can jump onto the boxes however you can't jump when your on a box.

Also note that in my code the varibale name difficulty =/= The level, the
difficulty determines how fast/frequent the obstacles you see in each of the
3 stages of the game are.

The idea/concept for this is heavily inspired by
The Boyz - The Stealer music video
This is the link if you are interested in watching it
https://www.youtube.com/watch?v=c_e-IC0VwZM&ab_channel=THEBOYZ

Hit sound effect: https://freesound.org/people/CastIronCarousel/sounds/216783/
Gameplay music: https://www.youtube.com/watch?v=bPtYl2hdrVo&ab_channel=MeimeiZhu
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
let warningImg;

let level = 1;
let lvlOne;
let lvlTwo;
let lvlThree;

// laser stuff for level 2
let lasers = [];
let numLasers = 10;

// Mic stuff
let mic;

// Text fade
let fade = 255;
let fadeAmonut = 1;

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
  warningImg = loadImage("assets/images/warning.png");

  gameMusic = loadSound("assets/sounds/gameMusic.mp3");
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

  gameMusic.setVolume(0.2);
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
  } else if (state === `warning`) {
    warningScreen();
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
    musicCredit();
    lvlOne.displayDoor();
    stealer.move();
    handleKey();
    lvlOne.barShow();
    lvlOne.showLives();
  } else if (level == 2) {
    lvlTwo.backgroundMove();
    lvlTwo.crateShow();
    musicCredit();
    addLasers();
    lvlTwo.displayLasers();
    stealer.move();
    handleKey();
    lvlTwo.displayDoor();
    lvlTwo.showLives();
  } else if (level == 3) {
    lvlThree.backgroundMove();
    musicCredit();
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
  let levelMic = mic.getLevel();
  if (difficulty === 1 || difficulty === 2 || difficulty === 3) {
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
  } else if (difficulty === 4) {
    if (levelMic >= 0.05 && levelMic < 0.5) {
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
    }
    // Get player to jump when you shout
    else if (levelMic >= 0.5 && levelMic < 1) {
      stealer.jump();
      display(robberStandImg, stealer.size2, stealer.size);
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

  if (keyCode === ENTER && state == `start`) {
    state = `diffSelect`;
  } else if (state == `diffSelect` && key == "1") {
    difficulty = 1;
    state = `simulation`;
    gameMusic.loop();
  } else if (state == `diffSelect` && key == "2") {
    difficulty = 2;
    state = `simulation`;
    gameMusic.loop();
  } else if (state == `diffSelect` && key == "3") {
    difficulty = 3;
    state = `simulation`;
    gameMusic.loop();
  } else if (state == `diffSelect` && key == "4") {
    difficulty = 4;
    state = `warning`;
  } else if (state == `warning` && keyCode === ENTER) {
    state = `simulation`;
    gameMusic.loop();
  }

  // Making the jump key only available for the first 3 difficulties.
  if (difficulty == 1 || difficulty == 2 || difficulty == 3) {
    if (keyCode === UP_ARROW) {
      stealer.jump();
    }
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
  This function creates the lasers for level 2 at random times between the
  y-position 300 - 390 and once 10 have been made, the variable numLasers gets
  10 added to it that way the lasers never stop being made while you're playing
  the second level.

  Samuel (TA) helped me with getting the lasers to enter the scene at
  random times
*/
function addLasers() {
  if(difficulty === 1){
    if (lasers.length < numLasers) {
      if (random() < 0.01) {
        let x = 1280;
        let y = random(300, 390);
        let laser = new Laser(x, y);
        lasers.push(laser);
      }
    } else if (lasers.length == numLasers) {
      numLasers += 10;
    }
  }
  else if(difficulty === 2 || difficulty === 4){
    if (lasers.length < numLasers) {
      if (random() < 0.02) {
        let x = 1280;
        let y = random(300, 390);
        let laser = new Laser(x, y);
        lasers.push(laser);
      }
    } else if (lasers.length == numLasers) {
      numLasers += 10;
    }
  }
  else if(difficulty === 3){
    if (lasers.length < numLasers) {
      if (random() < 0.03) {
        let x = 1280;
        let y = random(300, 390);
        let laser = new Laser(x, y);
        lasers.push(laser);
      }
    } else if (lasers.length == numLasers) {
      numLasers += 10;
    }
  }
}

/*
  The following 5 functions tell the program what to do for the start state,
  the difficulty select state (and warning state for difficulty 4), the win
  state and the lose state.
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
function warningScreen() {
  lvlOne.backgroundMove();
  lvlOne.crateShow();
  image(warningImg, width / 2, height / 2);
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

/*
  This function is strictly for attributing the artist I got the background
  music from (link to the song is in the comment at the top of this doc.)
*/
function musicCredit(){
  textSize(25);
  textAlign(CENTER);
  fill(200,200,200,fade);
  textFont("monospace");
  text(`Music: The Stealer Orchestra Version - MeiMei Zhu`, 400,  690);
  if(fade > 255){
    fadeAmonut = -0.5;
  }
  fade += fadeAmonut;
}
