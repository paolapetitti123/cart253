class Car extends Vehicle {
  constructor(x,y){
    super(x,y);
    this.width = 50;
    this.height = 20;
    this.speed = 5;
  }

  display(){
    super.display();

    push();
    rectMode(CENTER);
    noStroke();
    fill(255,0,0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
