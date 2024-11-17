from src.models.pieces import(
    WHITE,
    BLACK
)


def _white_piece_name(piece: str) -> str:
    piece_name = ""

    for name, piece_icon in WHITE.items():

        if piece_icon == piece:

            piece_name = name

    return piece_name
    


def _black_piece_name(piece: str) -> str:
    piece_name = ""

    for name, piece_icon in BLACK.items():

        if piece_icon == piece:

            piece_name = name

    return piece_name


def _is_white(pieces: str):
    if pieces in WHITE.values():
        return True
    elif pieces in BLACK.values():
        return False
    else:
        raise ValueError("Invalid piece")


def _in_board(position: tuple[int, int]):
    row, col = position

    if row < 0 or row > 7:
        return False
    if col < 0 or col > 7:
        return False

    return True


def _valid_positions(start: tuple[int, int], end: tuple[int, int]):

    if not _in_board(start) or not _in_board(end):
        return False
    
    if start == end:
        return False

    return True