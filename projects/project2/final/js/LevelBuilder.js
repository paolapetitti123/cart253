class LevelBuilder {
  constructor(bgLeft, bgImg, crateImg, heartLivesImg, transparentImg) {
    this.bgImg = bgImg;
    this.bgLeft = bgLeft;
    this.moveSpeed = 15;
    this.crateX = undefined;
    this.crateY = 547;
    this.crateW = 150;
    this.crateH = 150;
    this.crateS = 150;
    this.crateImg = crateImg;
    this.heartLivesImg = heartLivesImg;
    this.transparentImg = transparentImg;
    this.crateTop = 390;
  }

  /*
    This function just shows the background image while also resizing it
    to make sure it fits the screen.
  */
  backgroundMove() {
    imageMode(CORNER);
    this.bgImg.resize(7250, 720);
    image(this.bgImg, this.bgLeft, 0);
  }

  /*
    This function allows for the background to scroll to the left
  */
  moveBgLeft() {
    if (difficulty === 1 || difficulty === 2 || difficulty === 3) {
      let minBgLeft = -this.bgImg.width + width;

      if (this.bgLeft - this.moveSpeed > minBgLeft) {
        this.bgLeft -= this.moveSpeed;
      }
    } else if (difficulty === 4) {
      let minBgLeft = -this.bgImg.width + width;

      if (this.bgLeft - this.moveSpeed > minBgLeft) {
        this.bgLeft -= this.moveSpeed;
      }
    }
  }

  /*
    This function allows for the background to scroll to the right
  */
  moveBgRight() {
    if (difficulty === 1 || difficulty === 2 || difficulty === 3) {
      if (this.bgLeft + this.moveSpeed < 0) {
        this.bgLeft += this.moveSpeed;
      }
    } else if (difficulty === 4) {
      if (this.bgLeft + this.moveSpeed < 0) {
        this.bgLeft += this.moveSpeed;
      }
    }
  }

  /*
    The following 2 crate functions show the crates, detect if you touch one & if
    you are currently on a crate, if you are on a crate the bars can't hurt you.
  */
  crateShow() {
    this.crateX = this.bgLeft + 500;
    imageMode(CENTER);
    image(this.crateImg, this.crateX, this.crateY, this.crateW, this.crateH);
    this.crateTouch(this.crateX);
    for (let j = 0; j < 5; j++) {
      this.crateX += 1000;

      imageMode(CENTER);
      image(this.crateImg, this.crateX, this.crateY, this.crateW, this.crateH);
      this.crateTouch(this.crateX);
    }
  }

  crateTouch(crateX) {
    if (
        stealer.pos.x + stealer.r / 6 > crateX - this.crateW / 2 &&
        stealer.pos.x - stealer.r / 6 < crateX + this.crateW / 2 &&
        stealer.pos.y + stealer.r / 2 > this.crateY - this.crateH / 2 &&
        stealer.pos.y - stealer.r / 2 < this.crateY - this.crateH / 2
      ) {
        stealer.vy = 0;
        /*
          I add/subtract 15 px from the x position since that's the perfect
          wiggle room between the player and the box to ultimately stop the
          player from walking infront of the box.
        */
        if (stealer.pos.y > this.crateTop) {
          if (stealer.pos.x < crateX) {
            stealer.pos.x -= 15;
          } else {
            stealer.pos.x += 15;
          }
        }
        /*
          Setting the players x position to a really small number so visually
          it looks like the player isn't sliding off the box, because setting
          it to 0 makes the player not move at all but bigger numbers makes the
          player slide off the box
        */
        else if (stealer.pos.y <= this.crateTop) {
          stealer.pos.x -= 0.01;
        }
      }
  }

  /*
    This function allows for the players lives/hearts to be seen in the
    top left corner of the screen, and it updates to whatever the live counter
    is at, if it reaches 0 it displays a blank png file
  */
  showLives() {
    if (livesCounter == 3) {
      image(this.heartLivesImg, 50, 65, 25, 25);
      image(this.heartLivesImg, 80, 65, 25, 25);
      image(this.heartLivesImg, 110, 65, 25, 25);
    } else if (livesCounter == 2) {
      image(this.heartLivesImg, 50, 65, 25, 25);
      image(this.heartLivesImg, 80, 65, 25, 25);
    } else if (livesCounter == 1) {
      image(this.heartLivesImg, 50, 65, 25, 25);
    } else if (livesCounter == 0) {
      image(this.transparentImg, 50, 65, 25, 25);
    }
  }

  displayDoor() {
    // define in levels classes
  }
}
