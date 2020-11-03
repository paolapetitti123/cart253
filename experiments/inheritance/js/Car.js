class Car extends Vehicle {
  constructor(x,y){
    super(x,y);
    this.width = 50;
    this.height = 20;
    this.vx = 5;
    this.drunkness = 0.2;
  }

  move(){
    super.move();
    this.veer();
  }

  veer(){
    let r = random();
    if (r < this.drunkness){
      this.vy = random(-5,5);
    }
  }

  wrap(){
    super.wrap();
    if(this.y > height){
      this.y -= height;
    }
    else if(this.y < 0){
      this.y += height;
    }
  }

  display() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(255,0,0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
