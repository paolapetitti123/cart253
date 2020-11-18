class Laser {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.height = 10;
    this.width = 70;
    this.speed = -15;
  }



  move(){
    this.vx = this.speed;

    this.x += this.vx;
    this.y += this.vy;
  }

  laserTouch(){
    if(
      (stealer.pos.x + stealer.size / 6 > this.x - this.width / 2 &&
      stealer.pos.x - stealer.size / 6 < this.x + this.width / 2 &&
      stealer.pos.y + stealer.size / 2 > this.y + this.height &&
      stealer.pos.y - stealer.size / 2 < this.y) && livesCounter >= 0
    ){
      fill(255,0,0,50);
      rectMode(CORNER);
      rect(0,0,width, height);
      livesCounter -= 1;
      punchSound.play();
      this.x = 0;
     }
     else if (livesCounter < 0) {
       state = `loseEnding`;
       gameMusic.stop();
       gameOver.play();
     }
  }

  display(){
    push();
    fill(55,255,0,50);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
