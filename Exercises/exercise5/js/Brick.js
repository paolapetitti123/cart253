class Brick {

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 100;
    this.active = true;
  }

  display(){
    push();
    fill(176,34,9);
    strokeWeight(4);
    stroke(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }


}
