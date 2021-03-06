class Ball extends PlaySound {
  constructor(x, y, note) {
    super(note);
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
      this.playNote();
    }
  }



  display() {
    super.display();
    push();
    fill(255, 50, 50);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
