class LevelBuilder{
  constructor(bgImg,crateImg, heartLivesImg, transparentImg){
    this.bgImg = bgImg;
    this.bgLeft = 0;
    this.moveSpeed = 15;
    this.crateX = undefined;
    this.crateY = 547,
    this.crateW = 150;
    this.crateH = 150;
    this.crateS = 150;
    this.crateImg = crateImg;
    this.livesCounter = 0;
    this.heartLivesImg = heartLivesImg;
    this.transparentImg = transparentImg;
  }
  backgroundMove(){
    imageMode(CORNER);
    this.bgImg.resize(7250,720);
    image(this.bgImg, this.bgLeft, 0);
  }

  moveBgLeft() {
    let minBgLeft = -this.bgImg.width + width;

    if (this.bgLeft - this.moveSpeed > minBgLeft) {
      this.bgLeft -= this.moveSpeed;
    }
  }

  moveBgRight() {
    if (this.bgLeft + this.moveSpeed < 0) {
      this.bgLeft += this.moveSpeed;
    }
  }

  crateShow(){
    this.crateX = this.bgLeft + 500;
    imageMode(CENTER);
    image(this.crateImg, this.crateX, this.crateY, this.crateW, this.crateH);
    crateTouch(this.crateX);
    for (let j = 0; j < 5; j++){
      this.crateX += 1000;

      imageMode(CENTER);
      image(this.crateImg, this.crateX, this.crateY, this.crateW, this.crateH);
      crateTouch(this.crateX);
    }
  }

  crateTouch(crateX){
    if(stealer.pos.x + stealer.r / 6 > crateX - this.crateW / 2 &&
    stealer.pos.x - stealer.r / 6 < crateX + this.crateW / 2 &&
    stealer.pos.y + stealer.r / 2 > this.crateY - this.crateH / 2 &&
    stealer.pos.y - stealer.r / 2 < this.crateY - this.crateH/ 2){
      stealer.vy = 0;
      if(stealer.pos.y >= 520){
        if(stealer.pos.x < crateX){
          stealer.pos.x -= 15;
        }
        else {
          stealer.pos.x -= 15;
        }
      }
      else if(stealer.pos.y < 520){
        stealer.pos.x -= 0.01;
      }
    }
  }

  showLives(){
    if(this.livesCounter == 3){
      image(this.heartLivesImg, 50, 65, 25, 25);
      image(this.heartLivesImg, 80, 65, 25, 25);
      image(this.heartLivesImg, 110, 65, 25, 25);
    } else if(this.livesCounter == 2){
      image(this.heartLivesImg, 50, 65, 25, 25);
      image(this.heartLivesImg, 80, 65, 25, 25);
    } else if(this.livesCounter == 1){
      image(this.heartLivesImg, 50, 65, 25, 25);
    }
    else if(this.livesCounter == 0){
      image(this.transparentImg, 50, 65, 25, 25);
    }
  }
}
