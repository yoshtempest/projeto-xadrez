function getDiagonalMoves(index, board) {
    const diagonalMoves = [-9, -7, 7, 9];  // Diagonais
    const validMoves = [];

    diagonalMoves.forEach(move => {
        let pos = index + move;

        while (pos >= 0 && pos < 64 && Math.abs((pos % 8) - (index % 8)) !== 7) {
            if (board[pos] === 0) {
                validMoves.push(pos);
            } else if ("prnbqk".includes(board[pos])) {
                validMoves.push(pos);
                break;
            } else {
                break;
            }
            pos += move;
        }
    });

    return validMoves;
}
