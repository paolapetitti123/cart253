class Stealer {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.speed = moveSpeed;
  }

  canMoveLeft(){
   if (this.x > 50 + this.speed){
     return true;
   } else {
     return false;
   }
  }

  canMoveRight(){
   if (this.x < width - (50 + this.speed)){
     return true;
   } else {
     return false;
   }
  }


  moveLeft(){
    this.x -= this.speed;
  }

  moveRight(){
    this.x += this.speed;
  }


  show(){
    fill(255);
    rect(this.x, this.y, 20, 20);
  }

}
