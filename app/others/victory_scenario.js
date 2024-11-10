const WINNING_SCORE = 100;

function resetBoard() {
    values = 
    [pieces.white.tower, pieces.white.knight, pieces.white.bishop, pieces.white.queen, pieces.white.king, pieces.white.bishop, pieces.white.knight, pieces.white.tower],
    [pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn],
    Array(8).fill(pieces.nothing),
    Array(8).fill(pieces.nothing),
    Array(8).fill(pieces.nothing),
    Array(8).fill(pieces.nothing),
    [pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn],
    [pieces.black.tower, pieces.black.knight, pieces.black.bishop, pieces.black.queen, pieces.black.king, pieces.black.bishop, pieces.black.knight, pieces.black.tower]
}

var bestEffect = Math.min.apply(null, effects);
if (bestEffect >= WINNING_SCORE) {
    alert("Você Venceu!");
    setTimeout(resetBoard, 100);
}
