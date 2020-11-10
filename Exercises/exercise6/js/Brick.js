class Brick extends PlaySound {
  constructor(x, y, note) {
    super(note);
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 100;
    this.active = true;
  }

  // Checks to see if the ball hits one of the bricks and if it does the brick
  // disappears and 1 gets added to the brick counter so that once the counter
  // reaches the number of bricks, the game is over.
  hit(ball) {
    if (
      ball.x > this.x - this.width / 2 &&
      ball.x < this.x + this.width / 2 &&
      ball.y + ball.size / 2 > this.y - this.height / 2 &&
      ball.y - ball.size / 2 < this.y + this.height / 2
    ) {
      this.active = false;
      let dx = ball.x - this.x;
      ball.vx += map(dx, -this.width / 2, this.width / 2, -2, 2);

      ball.vy = -ball.vy;
      ball.ay = 0;
      brickCounter++;
      this.playNote();
    }
  }

  display() {
    super.display();
    push();
    fill(176, 34, 9);
    strokeWeight(4);
    stroke(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
