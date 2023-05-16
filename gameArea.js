let myGameArea = {
  canvas:document.createElement('canvas'),
  keyState:{},
  start:function(){
    this.canvas.width=1000;
    this.canvas.height=500;
    this.context = this.canvas.getContext('2d'),
    
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    
    if(homeScreenStart.game){
      this.interval = setInterval(update, 20);
    } else {
      this.interval = setInterval(homeScreen, 20);
    }
    let keyPressed
    addEventListener("keydown", function(e){
      myGameArea.keyState[e.keyCode] = true;
    });
    addEventListener("keyup", function(e){
      myGameArea.keyState[e.keyCode] = false;       
    });
  },
  clear:function(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}