class Stealer {
  constructor(x, y) {
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
    this.jumpHeight = -35;
    this.alive = true;
  }

  /*
    This function adds a force to simulate gravity
  */
  applyForce(force) {
    this.acc.add(force);
  }

  /*
    This function is constantly updating the vel, acc & pos of the character
  */
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  /*
    This function allows for the character to move while being confined to the
    screen
  */
  move() {
    this.pos.y += this.vy;
    this.vy += this.gravity;
    this.pos.y = constrain(this.pos.y, 0, height - this.r);
  }

  /*
    This function allows for the character to jump
  */
  jump() {
    if (this.pos.y === height - this.r) {
      this.vy = this.jumpHeight;
    }
  }

  // This function checks if it's possible to continue moving left
  canMoveLeft() {
    if(difficulty === 1 || difficulty === 2 || difficulty === 3){
    if (this.pos.x > 50 + this.speed) {
      return true;
    } else {
      return false;
    }
  }
    else if(difficulty === 4){
      if (this.pos.x > 50 + this.speed || level >= 0.01 && level < 0.5) {
        return true;
      } else {
        return false;
      }
    }
  }

  /*
    This function checks if it's possible to move to the right
  */
    if(difficulty === 1 || difficulty === 2 || difficulty === 3){
      if (this.pos.x < width - (450 + this.speed)) {
        console.log("true");
        return true;

      } else {
        console.log("false");
        return false;
      }
    }
    else if(difficulty === 4){

      if (this.pos.x < width - (450 + this.speed)) {
        return true;
      } else {
        return false;
      }
    }
  }

  /*
    This function allows the character to move left
  */
  moveLeft() {
    this.pos.x -= moveSpeed;
  }

  /*
    This function allows the character to move right
  */
  moveRight() {
    this.pos.x += moveSpeed;
  }

}
