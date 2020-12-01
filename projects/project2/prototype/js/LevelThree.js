class LevelThree extends LevelBuilder {
  constructor(bgLeft, bgImg, crateImg, axeImg, heartLivesImg, transparentImg) {
    super(bgLeft, bgImg, crateImg, heartLivesImg, transparentImg);
    this.bgLeft = bgLeft;
    this.floor = 540;
  }

  displayAxe() {
    for (let i = 0; i < axes.length; i++) {
      let axe = axes[i];
      if (axe.active) {
        axe.display();
        axe.axeTouch();
      }
      if (axe.y == this.floor) {
        axe.active = false;
      }
    }
  }

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
}
