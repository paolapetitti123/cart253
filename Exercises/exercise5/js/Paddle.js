class Paddle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.speed = 10;
    this.x = width / 2;
    this.y = height - this.height / 2;
  }

  moveLeft() {
    this.x -= this.speed;
    // starting at this.width/2 makes the paddle edge on the left not exceed
    // past the canvas screen
    this.x = constrain(this.x, this.width / 2, width);
  }

  moveRight() {
    this.x += this.speed;
    // ending at width - this.width/2 makes the paddle edge on the right
    // not exceed past the canvas screen
    this.x = constrain(this.x, 0, width - this.width / 2);
  }

  // This method allows the paddle to be seen
  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
