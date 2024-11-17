from src.models.main import(
    BLACK,
    WHITE
)
from src.models.team import (
    WHITE_TEAM,
    BLACK_TEAM
)

class Position():
    def __init__(self, line: int, column: int):
        self.line = line
        self.column = column

class Pawn:
    def __init__(self, color: str, position: Position):
        self.color = color
        self.position = position
        self.first_move = True

        if self.color == BLACK_TEAM:
            self.icon = BLACK["pawn"]
        else:
            self.icon = WHITE["pawn"]

    def move(self, direction: Position):

        if WHITE_TEAM:
            if self._valid_white_position(direction):
                self.position = direction
        
        elif BLACK_TEAM:
            if self._valid_black_position(direction):
                self.position = direction

        else:
            ...

    def _valid_white_position(self, direction: Position):
        if self.first_move:

            if (direction.line == self.position.line - 1 or direction.line == self.position.line - 2) and direction.column == self.position.column:

                self.first_move = False

                return True
            
        elif self.first_move == False:

            if direction.line == self.position.line - 1 and direction.column == self.position.column:

                return True

        else:
            raise ValueError("Invalid move")


    def _valid_black_position(self, direction: Position):

        if self.first_move:

            if (direction.line == self.position.line + 1 or direction.line == self.position.line + 2) and direction.column == self.position.column:

                self.first_move = False

                return True
            
        elif self.first_move == False:

            if direction.line == self.position.line + 1 and direction.column == self.position.column:
                
                return True

        else:
            raise ValueError("Invalid move")