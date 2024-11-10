// Atualiza o tabuleiro e destaca movimentos válidos
function updateBoardDisplay() {
    updateSquarecolor();

    for (let i = 0; i < 64; i++) {
        // Define o conteúdo de cada casa ou a deixa vazia
        sqs[i].innerHTML = values[i] !== 0 ? fonts[values[i]] : "";
    }

    // Adiciona o destaque para as casas de movimento
    scopes.forEach(index => sqs[index].classList.add("scope"));
}
