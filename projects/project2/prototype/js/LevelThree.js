class LevelThree extends LevelBuilder {
  constructor(bgLeft,bgImg,crateImg,axeImg,heartLivesImg,transparentImg){
    super(bgLeft,bgImg,crateImg,heartLivesImg,transparentImg);
    this.bgLeft = bgLeft;
  }

  displayAxe(){
    let x = this.bgLeft + 800;
    let y = 200;
    for(let i = 0; i< axes.length; i++){
      let axe = axes[i];
      if(axe.active){
        // axe.move(y);
        axe.display(x,y);
        axe.axeTouch();
      }
      // axe.move();

      x += 600;
    }
  }

}
