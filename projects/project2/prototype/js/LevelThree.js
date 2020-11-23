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
      axe.move();
      axe.display(x,y);
      axe.axeTouch();
      x += 600;
    }
  }

}
