import check from "./check_moves/check.js";
import checkPieceMoves from "./check_moves/check_piece_moves.js";
import { checkBlack } from "./check_moves/check_black.js";
import { checkWhite } from "./check_moves/check_white.js";

import { actionsValues } from "./others/actions_values.js";
import analyseLoop from "./others/analyse_loop.js";
import { inicialize } from "./others/inicialize.js";
import { promotePawn } from "./others/promote_pawn.js";
import updateBoard from "./others/update_board.js";
import victoryScenario from "./others/victory_scenario.js";

import { bishopMoves } from "./pieces_moves/bishop_moves.js";
import knightMoves from "./pieces_moves/knight_moves.js";
import { pawnMoves } from "./pieces_moves/pawn_moves.js";
import queenMoves from "./pieces_moves/queen_moves.js";
import { towerMoves } from "./pieces_moves/tower_moves.js";
import whiteKingMoves from "./pieces_moves/white_king_moves.js";
import { mouseClick } from "./pieces_moves/mouse_click.js";
import movePiece from "./pieces_moves/move_piece.js";

// Inicializa o tabuleiro

const board = inicialize();
let turn = "white";
let selectedPiece;
let selectedIndex;
let promotionPiece;

// Atualiza as cores dos quadrados do tabuleiro

updateBoard(board);


// Adiciona o destaque para as casas de movimento

Array.from(squares).forEach((square, index) => {
    square.addEventListener("click", () => mouseClick(index));
});

// Função para iniciar o arraste

function startDrag(event, index) {
    draggedPiece = event.target;
    draggedPieceInitialIndex = index;
}

