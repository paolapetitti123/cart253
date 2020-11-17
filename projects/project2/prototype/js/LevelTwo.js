class LevelTwo extends LevelBuilder {
  constructor(bgLeft,bgImg,crateImg,heartLivesImg,transparentImg){
    super(bgLeft,bgImg,crateImg,heartLivesImg,transparentImg);
    this.bgLeft = bgLeft;
  }

  /*
    Displaying the door at the end of the level that you need to reach in order
    to go to the next level.
  */
  displayDoor(){
    let doorX = this.bgLeft + 6800;
    imageMode(CENTER);
    image(doorImg,doorX, door.y, door.height, door.width);
    this.doorTouch(doorX);
  }

  doorTouch(doorX){
    if( stealer.pos.x + stealer.r/6 > doorX - door.width/2 &&
      stealer.pos.x - stealer.r/6 < doorX + door.width/2 ){
        level = 2;
        this.endOfLevel2();
      }
  }

  endOfLevel2(){
    // stealer.pos.x = 100;
    // livesCounter = 3;
    state = `winEnding`;
    gameMusic.stop();
  }
}
