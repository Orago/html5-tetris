function Board() {  
  this.boardMatrix = [
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,9],
    [9,9,9,9,9,9,9,9,9,9,9,9],
  ];  
}

Board.prototype.setPieceInBoard = function(piece) {
  for (var i = 0; i < piece.shape.length; i++) {
    for (var j = 0; j < piece.shape[0].length; j++) {
      if (piece.shape[i][j] === 1)
        this.boardMatrix[piece.position.y + i][piece.position.x + j] = piece.shape[i][j];
    }
  }  
}

Board.prototype.checkLines = function() {
  
}