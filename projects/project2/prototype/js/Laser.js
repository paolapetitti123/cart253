class Laser {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.height = 20;
    this.width = 70;
    this.speed = 15;
  }

  move(){
    this.vx = -this.speed;

    this.x += this.vx;
    this.y += this.vy;
  }

  wrap(){
    if(this.x > width){
      this.x -= width;
    }
    else if(this.x < 0){
      this.x += width;
    }
  }

  laserTouch(){

  }

  display(){
    push();
    fill('rgba(55,255,0,50)');
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
