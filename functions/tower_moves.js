function getTowerMoves(index, board) {
    const directions = [-8, 8, -1, 1]; // cima, baixo, esquerda, direita
    const validMoves = [];

    directions.forEach(direction => {
        let pos = index + direction;
        
        while (pos >= 0 && pos < 64 && (Math.abs((pos % 8) - (index % 8)) <= 1 || direction % 8 === 0)) {
            if (board[pos] === pieces.nothing) {
                validMoves.push(pos);
            } else if ("prnbqk".includes(board[pos])) {
                validMoves.push(pos);
                break;
            } else {
                break;
            }
            pos += direction;
        }
    });

    return validMoves;
}