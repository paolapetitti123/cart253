function Stealer(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.r = 200;
  this.vy = 0;
  this.vx = 0;
  this.gravity = 3;
  this.speed = moveSpeed;
  this.size = 200;
  this.size2 = 85;
  this.gravity = 3;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

  }

  this.move = function() {
    this.pos.y += this.vy;
    this.vy += this.gravity;
    this.pos.y = constrain(this.pos.y, 0, height - this.r);
  }

  this.jump = function() {
    if(this.pos.y === height - this.r){
      this.vy = -35;
    }
  }


  this.edges = function() {
    if (this.pos.y > height ) {
      this.vel.y *= 0;
      this.pos.y = height ;
    }
  }

  this.canMoveLeft = function(){
    if (this.pos.x > 50 + this.speed){
      return true;
    } else {
      return false;
    }
  }

  this.canMoveRight = function(){
    if (this.pos.x < width - (450 + this.speed)){
      return true;
    } else {
      return false;
    }
  }

  this.moveLeft = function(){
    this.pos.x -= moveSpeed;
  }

  this.moveRight = function(){
   this.pos.x += moveSpeed;
  }
}
