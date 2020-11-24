class Axe {
  constructor(x,y,axeImg){
    this.x = x;
    this.y = y;
    this.w = 200;
    this.h = 200;
    this.axeImg = axeImg;
    this.speed = 5;
  }

  move(){
    push();

    pop();
  }

  display(x,y){
    this.x = x;
    this.y = y;
    imageMode(CENTER);
    image(this.axeImg, x, y, this.w, this.h);
  }

  axeTouch(){

  }
}
