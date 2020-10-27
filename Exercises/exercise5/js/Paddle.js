class Paddle {
  constructor(w, h){
    this.width = w;
    this.height = h;
    this.speed = 15;
    this.x = 0;
    this.y = height - this.height/2;
  }

  // This method allows the paddle to move
  move() {
    this.x = mouseX;
  }

  moveLeft(){
    this.x -= this.speed;
  }

  moveRight(){
    this.x += this.speed;
  }

  // This method allows the paddle to be seen
  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }
}
