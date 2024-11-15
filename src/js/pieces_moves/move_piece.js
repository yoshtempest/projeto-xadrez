export function movePiece(index) {
    if (selectedPiece && index !== selectedIndex) {
        const destinationValue = board.flat()[index];

        if (checkPieceMoves(selectedPiece, selectedIndex, destinationValue, board.flat())) {
            board.flat()[selectedIndex] = pieces.nothing;
            board.flat()[index] = selectedPiece;

            if (destinationValue === pieces.nothing && selectedPiece === pieces.pawn && Math.abs(index - selectedIndex) === 16) {
                promotePawn(index);
            }

            turn = turn === "white" ? "black" : "white";

            if (victoryScenario(board.flat())) {
                alert(`${turn} wins!`);
                return;
            }

            updateBoard(board);

            selectedPiece = null;
            selectedIndex = null;

            analyseLoop(board.flat(), turn);
        }
    }
}