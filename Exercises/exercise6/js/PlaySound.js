class PlaySound {
  constructor(note){
    this.note = note;
    this.synth = new p5.PolySynth();
  }

  playNote(){
    this.synth.play(this.note,0.2,0,0.1);
  }

  display(){

  }
}
