function Stealer(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  // this.x = 50;
  this.r = 200;
  // this.y = height - this.r;
  this.vy = 0;
  this.gravity = 3;
  this.speed = moveSpeed;
  this.size = 150;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(255);
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }

  this.edges = function() {
    if (this.pos.y >= height) {
      this.vel.y *= 0;
      this.pos.y = height;
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
    this.pos.x  -= this.speed;
  }

  this.moveRight = function(){
    this.pos.x  += this.speed;
  }
}
