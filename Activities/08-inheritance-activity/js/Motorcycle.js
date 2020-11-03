class Motorcycle extends Vehicle {
  constructor(x,y){
    super(x,y);
    this.width = 30;
    this.height = 20;
    this.speed = 10;
  }

  display(){
    super.display();

    push();
    rectMode(CENTER);
    noStroke();
    fill(255,255,0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
