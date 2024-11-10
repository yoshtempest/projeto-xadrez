function promotePawn(position) {
    if (values[position] === "blackPawn" && position >= 56) {
        values[position] = "blackQueen";
    }
}

function executeMove(bestMove) {
    const [from, to] = bestMove.split("-").map(Number);
    values[to] = values[from];
    values[from] = 0;
    promotePawn(to);

    // Atualiza cores das casas envolvidas na jogada
    sqs.forEach(square => square.style.background = "#afa"); 
    sqs[to].style.background = '#aaf';
    sqs[from].style.background = '#aaf';
    
    // Atualiza o conteúdo visual das casas
    for (let x = 0; x < 64; x++) {
        sqs[x].innerHTML = values[x] === 0 ? "" : fonts[values[x]];
    }
}

function chooseBestMove() {
    const bestEffect = Math.min(...effects);
    if (bestEffect >= 100) {
        alert("Você Venceu!");
        return;
    }

    let tmpA = [], tmpB = [], tmpC = [];
    for (let n = 0; n < effects.length; n++) {
        if (effects[n] === bestEffect) {
            tmpA.push(actions[n]);
            tmpB.push(approved[n]);
            tmpC.push(effects[n]);
        }
    }

    const bestMove = tmpB[tmpA.indexOf(Math.max(...tmpA))];
    if (bestMove) {
        executeMove(bestMove);
        myTurn = true;
    } else {
        alert('Você venceu');
    }
}
