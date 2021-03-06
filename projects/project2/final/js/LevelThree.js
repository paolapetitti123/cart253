class LevelThree extends LevelBuilder {
  constructor(bgLeft, bgImg, crateImg, heartImg, axeImg, heartLivesImg, transparentImg) {
    super(bgLeft, bgImg, crateImg, heartLivesImg, transparentImg);
    this.bgLeft = bgLeft;
    this.floor = 540;
  }

  /*
    This function loops through the axes array and checks to make sure they
    are active (meaning they haven't hit the floor of the level), and so long
    as the axe is active, the loop displays the axes as well as calling for (var i = 0; i <collision detection. ngth; i++) {
    collision detection.
    }
  */
  displayAxe() {
    if(difficulty === 1 || difficulty === 2){
      for (let i = 0; i < axes.length; i++) {
        let axe = axes[i];
        if (axe.active) {
          axe.display();
        }
        axe.axeTouch(stealer);
        if (axe.y == this.floor) {
          axe.active = false;
          axe.y = 0;
        }
      }
    }
    else if(difficulty === 3 || difficulty === 4){
      this.floor = 500;
      for (let i = 0; i < axes.length; i++) {
        let axe = axes[i];
        if (axe.active) {
          axe.display();
        }
        axe.axeTouch(stealer);
        if (axe.y == this.floor) {
          axe.active = false;
          axe.y = 0;
        }
      }
    }
  }

  /*
    The following two functions allow for the axes to stick to the background
    as the stealer is moving forwards or backwards
  */
  moveBgLeft() {
    let minBgLeft = -this.bgImg.width + width;

    if (this.bgLeft - this.moveSpeed > minBgLeft) {
      for (let i = 0; i < axes.length; i++) {
        let axe = axes[i];
        axe.x -= this.moveSpeed;
      }
    }
    super.moveBgLeft();
  }

  moveBgRight() {
    if (this.bgLeft + this.moveSpeed < 0) {
      for (let i = 0; i < axes.length; i++) {
        let axe = axes[i];
        axe.x += this.moveSpeed;
      }
    }
    super.moveBgRight();
  }

  /*
    This function allows for the giant diamond to be seen at the end of
    the level
  */
  displayDiamond(){
    let diamondX = this.bgLeft + 6800;

    imageMode(CENTER);
    image(heartImg,diamondX, heartD.y, heartD.size, heartD.size);
    this.diamondTouch(diamondX);
  }

  /*
    This function checks to see if the player comes in contact with the diamond
    and if they do, the win Ending function gets called, and they player has
    won the game!
  */
  diamondTouch(diamondX){
    if( stealer.pos.x + stealer.r/6 > diamondX - heartD.size/2 &&
      stealer.pos.x - stealer.r/6 < diamondX + heartD.size/2 ){
        winEnding();
        gameMusic.stop();
        gameWin.play();
        noLoop();
      }
  }


}
