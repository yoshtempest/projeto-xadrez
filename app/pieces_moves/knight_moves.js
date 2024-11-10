function getKnightMoves(index, board) {
    const knightMoves = [
        -17, -15, -10, -6, 6, 10, 15, 17 // movimentos do cavalo
    ];
    const validMoves = [];

    knightMoves.forEach(move => {
        const pos = index + move;
        
        if (pos >= 0 && pos < 64 && Math.abs((pos % 8) - (index % 8)) <= 2) {
            if (board[pos] === pieces.nothing || "prnbqk".includes(board[pos])) {
                validMoves.push(pos);
            }
        }
    });

    return validMoves;
}