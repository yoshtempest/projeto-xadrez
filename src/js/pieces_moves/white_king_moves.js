export default function getKingMoves(index, board)
{
    if (target === pieces.white.king)
    {
        // Movimentos adjacentes do rei
        const kingMoves = [8, -8, 1, -1, 9, -9, 7, -7];
        kingMoves.forEach(move =>
        {
            let pos = n + move;
            if (pos >= 0 && pos < 64 && Math.abs((pos % 8) - (n % 8)) <= 1)
            {
                if (object.values(pieces.black).indexOf(values[pos]) >= 0 || values[pos] === pieces.nothing)
                {
                    scopes.push(pos);
                }
            }
        });
    
        // Verificação do Roque
        if (!ck) {  // Se o rei ainda não moveu
            // Roque grande (lado da dama)
            if (!cr2 && values[n - 1] === pieces.nothing && values[n - 2] === pieces.nothing && values[n - 3] === pieces.nothing && values[n - 4] === pieces.white.tower)
            {
                scopes.push(n - 2);
            }
            
            // Roque pequeno (lado do rei)
            if (!cr1 && values[n + 1] === pieces.nothing && values[n + 2] === pieces.nothing && values[n + 3] === pieces.white.tower)
            {
                scopes.push(n + 2);
            }
        }
    
        if (scopes.length) return scopes;
    }
}