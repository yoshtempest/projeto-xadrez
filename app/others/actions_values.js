function getEffectValue(piece) {
    switch (piece) {
        case "whiteKing":
            return 100;
        case "whiteQueen":
            return 50;
        case "whiteBishop":
        case "whiteKnight":
        case "whiteTower":
            return 30;
        case "whitePawn":
            return 15;
        default:
            return 0; // valor 0 caso a posição esteja vazia ou contenha uma peça inválida
    }
    function getEffectValue(piece) {
        switch (piece) {
            case "whiteKing":
                return 100;
            case "whiteQueen":
                return 50;
            case "whiteBishop":
            case "whiteKnight":
            case "whiteTower":
                return 30;
            case "whitePawn":
                return 15;
            default:
                return 0; // valor 0 caso a posição esteja vazia ou contenha uma peça inválida
        }
    }
}
