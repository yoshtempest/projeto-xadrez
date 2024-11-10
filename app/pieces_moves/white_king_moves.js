function getKingMoves(index, board) {
    if (target === "whiteKing") {
        // Movimentos adjacentes do rei
        const kingMoves = [8, -8, 1, -1, 9, -9, 7, -7];
        kingMoves.forEach(move => {
            let pos = n + move;
            if (pos >= 0 && pos < 64 && Math.abs((pos % 8) - (n % 8)) <= 1) {
                if ("prnbqk".indexOf(values[pos]) >= 0 || values[pos] === 0) {
                    scopes.push(pos);
                }
            }
        });
    
        // Verificação do Roque
        if (!ck) {  // Se o rei ainda não moveu
            // Roque grande (lado da dama)
            if (!cr2 && values[n - 1] === 0 && values[n - 2] === 0 && values[n - 3] === 0 && values[n - 4] === "whiteTower") {
                scopes.push(n - 2);
            }
            
            // Roque pequeno (lado do rei)
            if (!cr1 && values[n + 1] === 0 && values[n + 2] === 0 && values[n + 3] === "whiteTower") {
                scopes.push(n + 2);
            }
        }
    
        if (scopes.length) return scopes;
    }
}