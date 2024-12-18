export function checkWhite(n, values)
{
    const piece = values[n];
    const scopes = [];

    // Função para adicionar movimentos lineares (torre e rainha)
    function addLinearMoves(start, step, limitCondition)
    {
        let position = start + step;
        while (limitCondition(position))
        {
            if (values[position] === pieces.nothing)
            {
                scopes.push(position);
            }
            else if (Object.values(pieces.white).includes(values[position]))
            {
                scopes.push(position);
                break;
            } else {
                break;
            }
            position += step;
        }
    }

    // Função para adicionar movimentos diagonais (bispo e rainha)
    function addDiagonalMoves(start, step, limitCondition) {
        let position = start + step;
        while (limitCondition(position) && Math.abs((position % 8) - (start % 8)) === Math.abs(step % 8)) {
            if (values[position] === pieces.nothing) {
                scopes.push(position);
            } else if (Object.values(pieces.white).includes(values[position])) {
                scopes.push(position);
                break;
            } else {
                break;
            }
            position += step;
        }
    }

    // Função para adicionar movimentos do cavalo
    function addKnightMoves(start)
    {
        const knightMoves = [-17, -15, -10, -6, 6, 10, 15, 17];
        for (let move of knightMoves)
            {
            const position = start + move;
            // Condições para evitar saltos incorretos entre colunas
            if
            (
                position >= 0 && position < 64 &&
                Math.abs((position % 8) - (start % 8)) <= 2 &&
                (values[position] === pieces.nothing || Object.values(pieces.white).includes(values[position]))
            )
            {
                scopes.push(position);
            }
        }
    }

    // Condicionais para cada peça
    if (piece === pieces.black.tower)
    {
        // Movimentos verticais e horizontais
        addLinearMoves(n, -8, pos => pos >= 0); // Para cima
        addLinearMoves(n, 8, pos => pos < 64);  // Para baixo
        addLinearMoves(n, 1, pos => pos % 8 != 0);  // Para a direita
        addLinearMoves(n, -1, pos => pos % 8 != 7); // Para a esquerda
    }

    if (piece === pieces.black.bishop)
    {
        // Movimentos diagonais
        addDiagonalMoves(n, -9, pos => pos >= 0 && pos % 8 != 7); // Diagonal para cima à esquerda
        addDiagonalMoves(n, -7, pos => pos >= 0 && pos % 8 != 0); // Diagonal para cima à direita
        addDiagonalMoves(n, 9, pos => pos < 64 && pos % 8 != 0);  // Diagonal para baixo à direita
        addDiagonalMoves(n, 7, pos => pos < 64 && pos % 8 != 7);  // Diagonal para baixo à esquerda
    }

    if (piece === pieces.black.knight)
    {
        // Movimentos do cavalo
        addKnightMoves(n);
    }

    if (piece === pieces.black.queen)
    {
        // Movimentos da rainha (combina torre e bispo)
        // Movimentos lineares
        addLinearMoves(n, -8, pos => pos >= 0); // Para cima
        addLinearMoves(n, 8, pos => pos < 64);  // Para baixo
        addLinearMoves(n, 1, pos => pos % 8 != 0);  // Para a direita
        addLinearMoves(n, -1, pos => pos % 8 != 7); // Para a esquerda
        // Movimentos diagonais
        addDiagonalMoves(n, -9, pos => pos >= 0 && pos % 8 != 7); // Diagonal para cima à esquerda
        addDiagonalMoves(n, -7, pos => pos >= 0 && pos % 8 != 0); // Diagonal para cima à direita
        addDiagonalMoves(n, 9, pos => pos < 64 && pos % 8 != 0);  // Diagonal para baixo à direita
        addDiagonalMoves(n, 7, pos => pos < 64 && pos % 8 != 7);  // Diagonal para baixo à esquerda
    }

    if (piece === pieces.black.pawn)
    {
        // Movimento normal para frente
        let forward = n + 8;
        if (forward < 64 && values[forward] === pieces.nothing)
        {
            scopes.push(forward);
            // Movimento inicial de duas casas
            if (n >= 8 && n <= 15 && values[forward + 8] === pieces.nothing)
            {
                scopes.push(forward + 8);
            }
        }

        // Movimento diagonal para capturar peças adversárias
        let captureLeft = forward - 1;
        if (captureLeft >= 0 && captureLeft % 8 != 7 && Object.values(pieces.white).includes(values[captureLeft]))
        {
            scopes.push(captureLeft);
        }

        let captureRight = forward + 1;
        if (captureRight < 64 && captureRight % 8 != 0 && Object.values(pieces.white).includes(values[captureRight]))
        {
            scopes.push(captureRight);
        }
    }
    if (piece === pieces.white.king)
        {
        const kingMoves = [8, -8, 1, -1, 9, -9, 7, -7];
        
        kingMoves.forEach(move =>
            {
            const position = n + move;
            
            // Condições para verificar se a posição está dentro do tabuleiro e é acessível
            if (
                position >= 0 && position < 64 && 
                Math.abs((position % 8) - (n % 8)) <= 1 && // Limita movimento horizontal do rei
                (values[position] === pieces.nothing || Object.values(pieces.black).includes(values[position])) // Encontra peças pretas ou casas vazias
                )
                {
                scopes.push(position);
                }
            });
        }
    

    return scopes;
}
