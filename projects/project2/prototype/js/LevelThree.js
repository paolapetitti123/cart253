class LevelThree extends LevelBuilder {
  constructor(bgLeft,bgImg,crateImg,axeImg,heartLivesImg,transparentImg){
    super(bgLeft,bgImg,crateImg,heartLivesImg,transparentImg);
    this.bgLeft = bgLeft;
    this.floor = 540;
  }

  displayAxe(){
    let x = this.bgLeft + 800;
    let y = 200;
    for(let i = 0; i< axes.length; i++){
      let axe = axes[i];
      if(axe.active){
        axe.display(x,y);
        axe.axeTouch();
      }
      if(axe.y == this.floor){
        axe.active = false;
      }

      x += 600;
    }
  }

}
