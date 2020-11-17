class LevelOne extends LevelBuilder {
  constructor(bgLeft,bgImg,crateImg,heartLivesImg,transparentImg){
    super(bgLeft,bgImg,crateImg,heartLivesImg,transparentImg);
    this.x = bgLeft + 800;
    this.y = 622;
    this.bgLeft = bgLeft;
  }

  barShow(){
    let x = this.bgLeft + 800;
    let y = this.y;
    for (let i = 0; i < metalBars.length; i++){
      let bar = metalBars[i];
      bar.display(x,y, bar.width, bar.height);
      bar.barTouch(stealer);
      x += 600;
      console.log(x);
      if(bar.height <= bottom && bar.height > cieling){
        bar.grow();
      }
      else if(bar.height <= cieling && bar.height < bottom){
        bar.shrink();
      }
      else if(bar.height == 0){
        cieling = -496;
      }
    }
  }
}
