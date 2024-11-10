function checkPieceMoves(piece, index, board)
{
    switch(piece)
    {

// case pieces.white

        case pieces.white.Pawn:
            return getPawnMoves(index, board);
        case pieces.white.bishop:
            return getBishopMoves(index, board);
        case pieces.white.knight:
            return getKnightMoves(index, board);
        case pieces.white.tower:
            return getTowerMoves(index, board);
        case pieces.white.Queen:
            return getQueenMoves(index, board);
        case pieces.white.king:
            return getKingMoves(index, board);

// case pieces.black

        case pieces.black.Pawn:
            return getPawnMoves(index, board, true);
        case pieces.black.bishop:
            return getBishopMoves(index, board, true);
        case pieces.black.knight:
            return getKnightMoves(index, board, true);
        case pieces.black.tower:
            return getTowerMoves(index, board, true);
        case pieces.black.queen:
            return getQueenMoves(index, board, true);
        case pieces.black.king:
            return getKingMoves(index, board, true);

        default:
            return [];
    }
}