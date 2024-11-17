from src.models.pieces import (
    BLACK,
    WHITE,
    CELLS
)
# rook
# knight
board = [
    [BLACK["rook"], BLACK["knight"], BLACK["bishop"], BLACK["queen"], BLACK["king"], BLACK["bishop"], BLACK["knight"], BLACK["bishop"]],

    [BLACK["pawn"], BLACK["pawn"], BLACK["pawn"], BLACK["pawn"], BLACK["pawn"], BLACK["pawn"], BLACK["pawn"], BLACK["pawn"]],

    [CELLS["white"], CELLS["green"], CELLS["white"], CELLS["green"], CELLS["white"], CELLS["green"], CELLS["white"], CELLS["green"]],

    [CELLS["green"], CELLS["white"], CELLS["green"], CELLS["white"], CELLS["green"], CELLS["white"], CELLS["green"], CELLS["white"]],

    [CELLS["white"], CELLS["green"], CELLS["white"], CELLS["green"], CELLS["white"], CELLS["green"], CELLS["white"], CELLS["green"]],

    [CELLS["green"], CELLS["white"], CELLS["green"], CELLS["white"], CELLS["green"], CELLS["white"], CELLS["green"], CELLS["white"]],

    [WHITE["pawn"], WHITE["pawn"], WHITE["pawn"], WHITE["pawn"], WHITE["pawn"], WHITE["pawn"], WHITE["pawn"], WHITE["pawn"]],

    [WHITE["rook"], WHITE["knight"], WHITE["bishop"], WHITE["queen"], WHITE["king"], WHITE["bishop"], WHITE["knight"], WHITE["bishop"]],
]
