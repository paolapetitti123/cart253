class Axe {
  constructor(x,y,axeImg){
    this.x = x;
    this.y = y;
    this.w = 200;
    this.h = 200;
    this.axeImg = axeImg;
    this.speed = 5;
    this.rotation = 0;
  }

  move(){
    push();
    // angleMode(DEGREES);
    rotate(HALF_PI);
    pop();
  }

  display(x,y){
    // let r = constrain(angle, -2, 2);
    console.log(this.rotation);
    angleMode(DEGREES);
    this.x = x;
    this.y = y;
    push();
    // if(this.rotation <= 2){
    //   this.rotation -= 0.5;
    //   if(this.rotation == -2 && this.rotation < 2){
    //     this.rotation += 0.5;
    //   }
    // }
    // translate(0,0);
    // rotate(this.rotation);
    imageMode(CENTER);
    image(this.axeImg, x, y, this.w, this.h);


    // this.rotation += 0.5;
    pop();
  }

  axeTouch(){

  }
}
