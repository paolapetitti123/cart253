class LevelTwo extends LevelBuilder {
  constructor(bgLeft,bgImg,crateImg,heartLivesImg,transparentImg){
    super(bgLeft,bgImg,crateImg,heartLivesImg,transparentImg);
    this.bgLeft = bgLeft;

  }

/*
  The following two functions allow for the lasers to stick to the background
  as the stealer is moving forwards or backwards
*/
  moveBgLeft() {
    let minBgLeft = -this.bgImg.width + width;

    if (this.bgLeft - this.moveSpeed > minBgLeft) {
      for(let i = 0; i < lasers.length; i++){
        let laser = lasers[i];
        laser.x -= this.moveSpeed;
      }
    }
    super.moveBgLeft();
  }

  moveBgRight() {
    if (this.bgLeft + this.moveSpeed < 0) {
      for(let i = 0; i < lasers.length; i++){
        let laser = lasers[i];
        laser.x += this.moveSpeed;
      }
    }
    super.moveBgRight();
  }

/*
  This function allows for the lasers to be seen as well as calling their
  methods to move and check for any collision detection.
*/
  displayLasers(){
    for(let i = 0; i < lasers.length; i++){
      let laser = lasers[i];
      laser.move();
      laser.display();
      laser.laserTouch();
    }
  }

  /*
    Displaying the door at the end of the level that you need to reach in order
    to go to the next level, it also checks to see if the player has touched the
    door.
  */
  displayDoor(){
    let doorX = this.bgLeft + 6800;

    imageMode(CENTER);
    image(doorImg,doorX, door.y, door.height, door.width);
    this.doorTouch(doorX);
  }

/*
  Checks to see if the player has reached the door at the end of the levels
  and proceeds to call the end of level 2 function.
*/
  doorTouch(doorX){
    if( stealer.pos.x + stealer.r/6 > doorX - door.width/2 &&
      stealer.pos.x - stealer.r/6 < doorX + door.width/2 ){
        level = 3;
        this.endOfLevel2();
      }
  }

  /*
    This function resets the players position to the start of the level and
    resets the lives counter so it's ready for the next level.
  */
  endOfLevel2(){
    stealer.pos.x = 100;
    livesCounter = 3;
  }
}
