function getEffectValueWhite(piece) {
    switch (piece) {
        case pieces.white.king:
            return 100;
        case pieces.white.queen:
            return 50;
        case pieces.white.bishop:
        case pieces.white.knight:
        case pieces.white.tower:
            return 30;
        case pieces.white.pawn:
            return 15;
        default:
            return 0; // valor 0 caso a posição esteja vazia ou contenha uma peça inválida
    }
}
function getEffectValueBlack(piece) {
    switch (piece) {
        case pieces.black.king:
            return 100;
        case pieces.black.queen:
            return 50;
        case pieces.black.bishop:
        case pieces.black.knight:
        case pieces.black.tower:
            return 30;
        case pieces.black.pawn:
            return 15;
        default:
            return 0; // valor 0 caso a posição esteja vazia ou contenha uma peça inválida
    }
}
