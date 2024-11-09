function getLineMoves(index, board) {
    const lineMoves = [-8, 8, -1, 1];  // Cima, baixo, esquerda, direita
    const validMoves = [];

    lineMoves.forEach(move => {
        let pos = index + move;
        
        while (pos >= 0 && pos < 64 && Math.abs((pos % 8) - (index % 8)) <= 1) {
            if (board[pos] === 0) {
                validMoves.push(pos);
            } else if ("prnbqk".includes(board[pos])) {
                validMoves.push(pos);  // Adiciona posição com peça adversária
                break;
            } else {
                break;
            }
            pos += move;
        }
    });

    return validMoves;
}