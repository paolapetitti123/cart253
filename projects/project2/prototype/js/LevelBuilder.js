class LevelBuilder{
  constructor(bgImg,){
    this.bgImg = bgImg;
    this.bgLeft = 0;
    this.moveSpeed = 15;
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

  }

  showLives(){

  }
}
