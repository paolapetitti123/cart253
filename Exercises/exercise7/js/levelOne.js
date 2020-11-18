class LevelOne extends LevelBuilder {
  constructor(bgLeft,bgImg,crateImg,heartLivesImg,transparentImg){
    super(bgLeft,bgImg,crateImg,heartLivesImg,transparentImg);
    this.x = bgLeft + 800;
    this.y = 622;
    this.bgLeft = bgLeft;
  }

  /*
    The 5 following functions show the bars, detect if you hit one and
    what happens when you do hit one lose a life and get pushed back to try again
    so long as you haven't lost all your lives.
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

  doorTouch(doorX){
    if( stealer.pos.x + stealer.r/6 > doorX - door.width/2 &&
      stealer.pos.x - stealer.r/6 < doorX + door.width/2 ){
        level = 2;
        this.endOfLevel1();
      }
  }

  endOfLevel1(){
    stealer.pos.x = 100;
    livesCounter = 3;
  }
}
