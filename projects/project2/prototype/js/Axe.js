class Axe {
  constructor(x, y, axeImg) {
    this.x = x;
    this.y = y;
    this.w = 200;
    this.h = 200;
    this.vx = 0;
    this.vy = 0;
    this.axeImg = axeImg;
    this.speed = 10;
    this.active = true;
  }

/*
  This function allows for the axes to drop down at a random time given
  that the player has passed underneath it
*/
  move() {
    if(random() < 0.1 &&
      stealer.pos.x + stealer.size / 6 > this.x - this.w / 2){
        this.vy = this.speed;
      }
      this.y += this.vy;
    }

/*
  This function allows for the axes to be seen and the move function
  is called here.
*/
  display() {
    this.move();
    imageMode(CENTER);
    image(this.axeImg, this.x + bgLeft, this.y, this.w, this.h);
  }

/*
  This function checks if the player comes in contact with one of the axes
  and if they do, they lose a life and get moved 150 px forward or backwards
  depending on what side of the axe the player is on.
*/
  axeTouch(stealer) {
    let d = dist(stealer.pos.x, stealer.pos.y, this.x, this.y);
    if (d < stealer.size / 2 + this.w / 2 && livesCounter >= 0) {
      if (stealer.pos.x >= this.x) {
        fill(255, 0, 0, 50);
        rectMode(CORNER);
        rect(0, 0, width, height);
        stealer.jump();
        stealer.pos.x += 150;
        stealer.jump();
        livesCounter -= 1;
        punchSound.play();
      } else {
        fill(255, 0, 0, 50);
        rectMode(CORNER);
        rect(0, 0, width, height);
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
