function checkPieceMoves(piece, index, board) {
    switch(piece) {
        case pieces.white.tower:
            return getTowerMoves(index, board);
        case pieces.white.knight:
            return getKnightMoves(index, board);
        // Adicione outros casos para outras peças
        default:
            return [];
    }
}