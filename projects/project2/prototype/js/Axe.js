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
    if (random() < 0.01) {
      this.vy = this.speed;
    }

    this.y += this.vy;
    console.log(this.y);
  }

  display() {
    this.move();
    imageMode(CENTER);
    image(this.axeImg, this.x + bgLeft, this.y, this.w, this.h);
  }

  axeTouch() {}
}
