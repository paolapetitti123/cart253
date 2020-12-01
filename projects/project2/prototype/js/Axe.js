class Axe {
  constructor(x, y, axeImg) {
    this.x = x;
    this.y = y;
    this.w = 200;
    this.h = 200;
    this.vx = 0;
    this.vy = 0;
    this.axeImg = axeImg;
    this.speed = 5;
    this.active = true;
  }

  move() {
    if (
      random() < 0.01 &&
      stealer.pos.x + stealer.size / 6 > this.x - this.w / 2
    ) {
      this.vy = this.speed;
    }

    this.y += this.vy;
  }

  display() {
    this.move();
    // this.axeTouch(stealer);
    imageMode(CENTER);
    image(this.axeImg, this.x + bgLeft, this.y, this.w, this.h);
  }

  axeTouch(stealer) {
    let d = dist(stealer.pos.x,stealer.pos.y, this.x, this.y);
    if (d < stealer.size/2 + this.w/2 && livesCounter >= 0){
      if (stealer.pos.x >= this.x) {
        fill(255,0,0,50);
        rectMode(CORNER);
        rect(0,0,width, height);
        stealer.jump();
        stealer.pos.x += 150;
        stealer.jump();
        livesCounter -= 1;
        punchSound.play();
      } else {
        fill(255,0,0,50);
        rectMode(CORNER);
        rect(0,0,width, height);
        stealer.jump();
        stealer.pos.x -= 150;
        stealer.jump();
        livesCounter -= 1;
        punchSound.play();
      }
    } else if (livesCounter < 0) {
      state = `loseEnding`;
      gameMusic.stop();
      gameOver.play();
    }
  }
}
