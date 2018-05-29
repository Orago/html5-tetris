function Game(canvasElement) {
  this.canvas = canvasElement;
  this.ctx = canvas.getContext("2d");
  this.frameCounter = 0;
  this.framesTick = 30;
  this.board = new Board(this.ctx);
}

Game.prototype.start = function() {
  this.intervalId = setInterval(function() {
    this.ctx.clearRect(0,0,this.ctx.canvas.width, this.ctx.canvas.height)
    this.board.update();
    this.tickUpdate();
  }.bind(this), 16);
}

Game.prototype.tickUpdate = function () {
  this.frameCounter++;

  if (this.frameCounter >= this.framesTick) {
    this.frameCounter = 0;
    this.board.tickUpdate();
  }
}

Game.prototype.TOP = 38;
Game.prototype.DOWN = 40;
Game.prototype.LEFT = 37;
Game.prototype.RIGHT = 39;

Game.prototype.onkeydown = function(key) {
  switch(key) {
    case this.TOP:
      this.board.rotateFallingPiece(false);
      break;
    case this.RIGHT:
      break;
    case this.DOWN:
      this.board.rotateFallingPiece(true);
      break;
    case this.LEFT:
      break;
  }
}