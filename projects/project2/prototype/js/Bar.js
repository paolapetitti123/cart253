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
    push();
    fill(127);
    noStroke();
    rectMode(CORNER);
    rect(x, y,w,h);
    pop();
  }
}
