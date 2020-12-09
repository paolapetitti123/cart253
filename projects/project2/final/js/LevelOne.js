class LevelOne extends LevelBuilder {
  constructor(bgLeft,bgImg,crateImg,heartLivesImg,transparentImg){
    super(bgLeft,bgImg,crateImg,heartLivesImg,transparentImg);
    this.x = bgLeft + 800;
    this.y = 622;
    this.bgLeft = bgLeft;
  }

  /*
    This function allows for the metal bars to be seen, it also makes them
    grow and shrink while checking to see if the player comes in contact
    with one of the bars.
  */
  barShow(){
    let x = this.bgLeft + 800;
    let y = this.y;
    for (let i = 0; i < metalBars.length; i++){
      let bar = metalBars[i];
      bar.display(x,y, bar.width, bar.height);
      bar.barTouch(stealer);
      x += 600;
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
    Displaying the door at the end of the level that you need to reach in order
    to go to the next level.
  */
  displayDoor(){
     let doorX = this.bgLeft + 6800;

    imageMode(CENTER);
    image(doorImg,doorX, door.y, door.height, door.width);
    this.doorTouch(doorX);
  }
  /*
    This function checks to see if the player touches the door at the end
    of the level and calls the end of level function.
  */
  doorTouch(doorX){
    if( stealer.pos.x + stealer.r/6 > doorX - door.width/2 &&
      stealer.pos.x - stealer.r/6 < doorX + door.width/2 ){
        level = 2;
        this.endOfLevel1();
      }
  }

  /*
    This function resets the players position to the start of the level
    and resets the lives counter for the next level.
  */
  endOfLevel1(){
    stealer.pos.x = 100;
    livesCounter = 3;
  }
}
