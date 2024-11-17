export function getBishopMoves(index, board)
{
    const bishopMoves = [-9, -7, 7, 9];  // Deslocamentos para as diagonais
    const validMoves = [];

    function getDiagonalMoves(index, board)
    {
        const diagonalMoves = [-9, -7, 7, 9];  // Diagonais
        const validMoves = [];
    
        diagonalMoves.forEach(move => {
            let pos = index + move;
    
            while (pos >= 0 && pos < 64 && Math.abs((pos % 8) - (index % 8)) !== 7)
            {
                if (board[pos] === pieces.nothing)
                {
                    validMoves.push(pos);
                }
                else if (object.values(pieces.black).includes(board[pos]))
                {
                    validMoves.push(pos);
                    break;
                }
                else
                {
                    break;
                }
                pos += move;
            }
        });
    
        return validMoves;
    }
    bishopMoves.forEach(move =>
        {
        let pos = index + move;

        // Enquanto o movimento estiver dentro do tabuleiro e na mesma linha diagonal
        while (pos >= 0 && pos < 64 && Math.abs((pos % 8) - (index % 8)) !== 7)
        {
            if (board[pos] === pieces.nothing)
            {
                validMoves.push(pos);
            }
            else if (object.values(pieces.black).includes(board[pos]))
            {
                validMoves.push(pos); // Adiciona posição com peça adversária
                break;
            }
            else
            {
                break;
            }
            pos += move;  // Próxima posição na mesma direção
        }
    });

    return validMoves;
}