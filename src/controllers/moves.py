from src.controllers import directions
from src.controllers.choice import(
    _is_white,
    _white_piece_name,
    _black_piece_name,
    _valid_positions
)


def make_move(
        piece: str,
        start: tuple[int, int],
        end: tuple[int, int],
    ):
    if _is_white(piece):
        piece_name = _white_piece_name(piece)
        is_white = True
    else:
        piece_name = _black_piece_name(piece)
        is_white = False

    if piece_name == "pawn":
        _pawn_move(is_white, start, end)
    elif piece_name == "knight":
        _knight_move(is_white, start, end)
    elif piece_name == "bishop":
        _bishop_move(is_white, start, end)
    elif piece_name == "rook":
        _rook_move(is_white, start, end)
    elif piece_name == "queen":
        _queen_move(is_white, start, end)
    elif piece_name == "king":
        _king_move(is_white, start, end)
    else:
        raise ValueError("Invalid piece")
    

def _pawn_move(
        is_white: bool,
        start: tuple[int, int],
        end: tuple[int, int],
    ):
    # Check if the pawn can move to the end position
    _valid_positions(start, end)
    if is_white:
        PAWN = directions.WHITE_PAWN

        front = start[0] - 1
        



    else:
        ...


def _knight_move(
        is_white: bool,
        start: tuple[int, int],
        end: tuple[int, int],
    ):
    _valid_positions(start, end)


def _bishop_move(
        is_white: bool,
        start: tuple[int, int],
        end: tuple[int, int],
    ):
    _valid_positions(start, end)


def _rook_move(
        is_white: bool,
        start: tuple[int, int],
        end: tuple[int, int],
    ):
    _valid_positions(start, end)


def _queen_move(
        is_white: bool,
        start: tuple[int, int],
        end: tuple[int, int],
    ):
    _valid_positions(start, end)


def _king_move(
        is_white: bool,
        start: tuple[int, int],
        end: tuple[int, int],
    ):
    _valid_positions(start, end)

