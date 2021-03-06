class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 25;
    this.active = true;
  }

  gravity(force) {
    this.ay += force;
  }

  move() {
    this.vx += this.ax;
    this.vy += this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x += this.vx;
    this.y += this.vy;

    if (this.y - this.size / 2 > height) {
      this.active = false;
    }

    // This gets the ball to stay within the canvas along the X-axis while
    // also 'bouncing' off the sides so it doesn't get stuck there.
    this.x = constrain(this.x, 0, width);
    if (this.x >= width || this.x <= 0) {
      this.vx *= -1;
    }
  }

  // Allows for the ball to bounce off of the paddle
  bounce(paddle) {
    if (
      this.x > paddle.x - paddle.width / 2 &&
      this.x < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y - this.size / 2 < paddle.y + paddle.height / 2
    ) {
      let dx = this.x - paddle.x;
      this.vx += map(dx, -paddle.width / 2, paddle.width / 2, -2, 2);

      this.vy = -this.vy;
      this.ay = 0;
    }
  }

  // Checks to see if the ball hits one of the bricks and if it does the brick
  // disappears and 1 gets added to the brick counter so that once the counter
  // reaches the number of bricks, the game is over.
  hit(brick) {
    if (
      this.x > brick.x - brick.width / 2 &&
      this.x < brick.x + brick.width / 2 &&
      this.y + this.size / 2 > brick.y - brick.height / 2 &&
      this.y - this.size / 2 < brick.y + brick.height / 2
    ) {
      brick.active = false;
      let dx = this.x - brick.x;
      this.vx += map(dx, -brick.width / 2, brick.width / 2, -2, 2);

      this.vy = -this.vy;
      this.ay = 0;
      brickCounter++;
    }
  }

  display() {
    push();
    fill(255, 50, 50);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
