export function checkMoveBlackPawn(index, board)
{
    const target = board[index];
    const validMoves = [];
    
    if (target === pieces.white.pawn)
    {
        const upOne = index - 8;
        const upTwo = index - 16;

        // Captura diagonal esquerda
        if (upOne >= 0 && (index % 8 !== 0) && object.values(pieces.black).includes(board[upOne - 1]))
        {
            validMoves.push(upOne - 1);
        }
        
        // Captura diagonal direita
        if (upOne >= 0 && (index % 8 !== 7) && object.values(pieces.black).includes(board[upOne + 1]))
        {
            validMoves.push(upOne + 1);
        }
        
        // Movimento de avanço simples e duplo
        if (upOne >= 0 && board[upOne] === pieces.nothing)
        {
            validMoves.push(upOne);
            if (index >= 48 && board[upTwo] === pieces.nothing)
            {
                validMoves.push(upTwo);
            }
        }
    }
    return validMoves;

    function checkMoveWhitePawn(index, board)
    {
        const target = board[index];
        const validMoves = [];
        
        if (target === pieces.black.pawn)
        {
            const upOne = index - 8;
            const upTwo = index - 16;

            // Captura diagonal esquerda
            if (upOne >= 0 && (index % 8 !== 0) && object.values(pieces.black).includes(board[upOne - 1]))
            {
                validMoves.push(upOne - 1);
            }
            
            // Captura diagonal direita
            if (upOne >= 0 && (index % 8 !== 7) && object.values(pieces.black).includes(board[upOne + 1]))
            {
                validMoves.push(upOne + 1);
            }
            
            // Movimento de avanço simples e duplo
            if (upOne >= 0 && board[upOne] === pieces.nothing)
            {
                validMoves.push(upOne);
                if (index >= 48 && board[upTwo] === pieces.nothing)
                {
                    validMoves.push(upTwo);
                }
            }
        }
        return validMoves;
    }
}