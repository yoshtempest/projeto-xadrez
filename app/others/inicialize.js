const pieces = {
    white: {
        king: 1, queen: 2, tower: 3, bishop: 4, knight: 5, pawn: 6
    },
    black: {
        king: 7, queen: 8, tower: 9, bishop: 10, knight: 11, pawn: 12
    },
    nothing: 0
};

const fonts = {
    1: `&#9812;`, 2: `&#9813;`, 3: `&#9814;`, 4: `&#9815;`, 5: `&#9816;`, 6: `&#9817;`,
    7: `&#9818;`, 8: `&#9819;`, 9: `&#9820;`, 10: `&#9821;`, 11: `&#9822;`, 12: `&#9823;`
};

const board = [
    [pieces.white.tower, pieces.white.knight, pieces.white.bishop, pieces.white.queen, pieces.white.king, pieces.white.bishop, pieces.white.knight, pieces.white.tower],
    [pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn, pieces.white.pawn],
    Array(8).fill(pieces.nothing),
    Array(8).fill(pieces.nothing),
    Array(8).fill(pieces.nothing),
    Array(8).fill(pieces.nothing),
    [pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn, pieces.black.pawn],
    [pieces.black.tower, pieces.black.knight, pieces.black.bishop, pieces.black.queen, pieces.black.king, pieces.black.bishop, pieces.black.knight, pieces.black.tower]
];

window.onload = function() {
    const container = document.getElementById("container");
    const size = Math.min(window.innerWidth, window.innerHeight) / 8 - 2;
    
    board.flat().forEach((piece, index) => {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.left = `${(index % 8) * size}px`;
        square.style.top = `${Math.floor(index / 8) * size}px`;
        square.style.fontSize = `${size * 0.75}px`;

        if (piece !== pieces.nothing) square.innerHTML = fonts[piece];
        
        container.appendChild(square);
    });
};
let isKingChecked = false;
let isRookLeftMoved = false;
let isRookRightMoved = false;
let isPieceSelected = false;

const squares = document.getElementsByClassName("square");
const moveScapes = [];
let moveTarget = "";
let isMoveable = false;

// Inicializando o tabuleiro com as peças
Array.from(squares).forEach((square, index) => {
    if (board.flat()[index] !== pieces.nothing) {
        square.innerHTML = fonts[board.flat()[index]];
    }
    square.addEventListener("click", check);
});

// Atualizando as cores dos quadrados do tabuleiro
function updateSquareColor() {
    Array.from(squares).forEach((square, index) => {
        const isLightSquare = (Math.floor(index / 8) + index) % 2 === 0;
        square.style.background = isLightSquare ? '#9ff' : '#5fa';
    });
}
updateSquareColor();

// TODO: parei la linha 1200 e pouco