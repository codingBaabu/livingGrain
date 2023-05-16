export default class fireball {
  constructor(width, height, x, y, image){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.image = image;
  this.frameX=0;
  this.frameY=0;
  this.spriteWidth=121;
  this.spriteHeight=167;
  this.staggerFrames = 1;
  this.gameFrame = 0;
  }
  
  drawPiece(){
    this.ctx = myGameArea.context;

    img = new Image();
    img.src = this.image;
    this.ctx.drawImage(img, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);

    if(this.gameFrame % this.staggerFrames == 0){
      if(this.frameX < 2){ 
      this.frameX++;
      } else{
        this.frameX = 0;
      if(this.frameY == 0){
          this.frameY++;
        } else {
          this.frameY--;
        } 
      } 
    }
    this.gameFrame++;
  }
}