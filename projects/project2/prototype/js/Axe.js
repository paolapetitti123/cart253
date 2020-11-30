class Axe {
  constructor(x,y,axeImg){
    this.x = x;
    this.y = y;
    this.w = 200;
    this.h = 200;
    this.vx = 0;
    this.vy = 0;
    this.axeImg = axeImg;
    this.speed = 50;
    this.active = true;
  }

  move(){
    if(this.active){
      if(random()< 0.1){
        this.vy += this.speed;
      }
      cieling += this.vy;
      this.y += this.vy;
      console.log(this.y);
      if(this.y == bottom){
        this.active = false;
      }
    }
  }

  display(x,y){
    this.x = x;
    this.y = y;
    this.move();
    if(this.active){
      imageMode(CENTER);
      image(this.axeImg, this.x, this.y, this.w, this.h);

    }

  }

  axeTouch(){

  }
}
