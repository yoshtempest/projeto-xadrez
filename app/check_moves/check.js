function check() {
    if (!myTurn) return;
    
    const position = Number(this.classList[1].slice(1));
    const moveOptions = checkBlack(position, values) || [];

    if (!moveable) {
        if (moveOptions.length > 0) {
            moveable = true;
            moveTarget = position;
            moveScopes = moveOptions.join(",").split(",");
        }
    } else {
        if (moveScopes.includes(String(position))) {
            const boardCopy = [...values];
            boardCopy[position] = boardCopy[moveTarget];
            boardCopy[moveTarget] = pieces.nothing;

            let kingInCheck = false;
            for (let i = 0; i < 64; i++) {
                if (Object.values(pieces.black).includes(boardCopy[i])) {
                    const attackScopes = checkWhite(i, boardCopy) || [];
                    if (attackScopes.some(scope => boardCopy[scope] === pieces.white.king)) {
                        kingInCheck = true;
                        alert('Salve seu rei');
                        break;
                    }
                }
            }

            if (!kingInCheck) {
                // Atualiza o tabuleiro e verifica condições especiais
                values[position] = values[moveTarget];
                values[moveTarget] = pieces.nothing;

                // Lógica de roque
                if (cl) {
                    if (position === 62 && moveTarget === 60) { // Roque pequeno
                        values[63] = pieces.nothing;
                        values[61] = pieces.white.tower;
                    } else if (position === 58 && moveTarget === 60) { // Roque grande
                        values[56] = pieces.nothing;
                        values[59] = pieces.white.tower;
                    }
                }

                // Atualiza bandeiras de roque
                if (moveTarget === 60) ck = true;
                else if (moveTarget === 63) cr2 = true;
                else if (moveTarget === 56) cr1 = true;

                // Promoção de peão
                if (values[position] === pieces.white.pawn && position < 8) {
                    values[position] = pieces.white.queen;
                }

                // Finaliza a jogada
                moveable = false;
                myTurn = false;
                setTimeout(chooseTurn, 1000);
            }
        } else {
            // Reinicia as variáveis de movimento caso a jogada não seja válida
            moveScopes = [];
            moveable = false;
        }
    }
}
