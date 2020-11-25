class Axe {
  constructor(x,y,axeImg){
    this.x = x;
    this.y = y;
    this.w = 200;
    this.h = 200;
    this.axeImg = axeImg;
    this.speed = 5;
    this.active = true;
  }

  move(){
      if(random()< 0.1){
        console.log(this.y);
        cieling += 100;
        y += 100;
        if(this.y == bottom){
          this.active = false;
        }
      }
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
