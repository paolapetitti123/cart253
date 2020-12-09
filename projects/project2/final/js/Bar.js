class Bar {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 0;
  }

  /*
    This function makes the metal bars grow at different speeds depending on
    which difficulty level was selected at the beginning.
  */
  grow(){
    if (difficulty === 1) {
      this.height -= 3;
    } else if (difficulty === 2) {
      this.height -= 7;
    } else if (difficulty === 3 || difficulty === 4) {
      this.height -= 10;
    }
  }
  /*
    This function makes the metal bars shrink at different speeds depending on
    which difficulty level was selected at the beginning (matching with the grow
    function).
  */
  shrink(){
    if (difficulty === 1) {
      cieling += 3;
      this.height += 3;
    } else if (difficulty === 2) {
      cieling += 7;
      this.height += 7;
    } else if (difficulty === 3 || difficulty === 4) {
      cieling += 10;
      this.height += 10;
    }
  }

  /*
    This function displays a gray rectangle that is the metal bar you must
    avoid.
  */
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

  /*
    This function checks to see if the player comes in contact with one of the
    bars and if they do, they lose a life, get pushed back or forwards depending
    on which side of the bar they were hit on. It also changes the game state
    to lose if the lives counter < 0. 
  */
  barTouch(stealer){
    if (
      (stealer.pos.x + stealer.size / 6 > this.x - this.width / 2 &&
      stealer.pos.x - stealer.size / 6 < this.x + this.width / 2 &&
      stealer.pos.y + stealer.size / 2 > this.y + this.height &&
      stealer.pos.y - stealer.size / 2 < this.y) && livesCounter >= 0
    ){
      if (stealer.pos.x >= this.x) {
        fill(255,0,0,50);
        rectMode(CORNER);
        rect(0,0,width, height);
        stealer.jump();
        stealer.pos.x += 100;
        stealer.jump();
        livesCounter -= 1;
        punchSound.play();
      } else {
        fill(255,0,0,50);
        rectMode(CORNER);
        rect(0,0,width, height);
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
