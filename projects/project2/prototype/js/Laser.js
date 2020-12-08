class Laser {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.height = 10;
    this.width = 70;
    this.speed = -15;
  }

  /*
    This function allows for the lasers in level 2 to move at different
    speeds depends on which difficulty level was selected at the beginning
  */
  move() {
    if (difficulty === 1) {
      this.vx = this.speed;
    } else if (difficulty === 2) {
      this.vx = this.speed * 1.5;
    } else if (difficulty === 3 || difficulty === 4) {
      this.vx = this.speed * 2;
    }
    this.x += this.vx;
    this.y += this.vy;
  }
  /*
    This function checks to see if the player comes in contact with one of
    the lasers and makes them lose a life if they do.
  */
  laserTouch() {
    if (
      stealer.pos.x + stealer.size / 6 > this.x - this.width / 2 &&
      stealer.pos.x - stealer.size / 6 < this.x + this.width / 2 &&
      stealer.pos.y + stealer.size / 2 > this.y + this.height &&
      stealer.pos.y - stealer.size / 2 < this.y &&
      livesCounter >= 0
    ) {
      fill(255, 0, 0, 50);
      rectMode(CORNER);
      rect(0, 0, width, height);
      livesCounter -= 1;
      punchSound.play();
      this.x = 0;
    } else if (livesCounter < 0) {
      state = `loseEnding`;
      gameMusic.stop();
      gameOver.play();
    }
  }
  /*
    This function make a green rectangle that is 50% transparent and displays
    it.
  */
  display() {
    push();
    fill(55, 255, 0, 50);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
