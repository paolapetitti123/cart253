class Bar {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 0;
  }

  grow(){
    if (difficulty === 1) {
      this.height -= 3;
    } else if (difficulty === 2) {
      this.height -= 7;
    } else if (difficulty === 3) {
      this.height -= 10;
    }
  }

  shrink(){
    if (difficulty === 1) {
      cieling += 3;
      this.height += 3;
    } else if (difficulty === 2) {
      cieling += 7;
      this.height += 7;
    } else if (difficulty === 3) {
      cieling += 10;
      this.height += 10;
    }
  }


  display(x,y,w,h){
    this.x = x;
    this.y = y;
    push();
    fill(127);
    noStroke();
    rectMode(CORNER);
    rect(x,y,w,h);
    pop();
  }

  barTouch(stealer){
    if (
      (stealer.pos.x + stealer.size / 6 > this.x - this.width / 2 &&
      stealer.pos.x - stealer.size / 6 < this.x + this.width / 2 &&
      stealer.pos.y + stealer.size / 2 > this.y + this.height &&
      stealer.pos.y - stealer.size / 2 < this.y) && livesCounter >= 0
    ){
      if (stealer.pos.x >= this.x) {
        stealer.jump();
        stealer.pos.x += 100;
        stealer.jump();
        livesCounter -= 1;
        punchSound.play();
      } else {
        stealer.jump();
        stealer.pos.x -= 100;
        stealer.jump();
        livesCounter -= 1;
        punchSound.play();
      }
    }
    else if (livesCounter < 0) {
      state = `loseEnding`;
      gameMusic.stop();
      gameOver.play();
    }
  }
}
