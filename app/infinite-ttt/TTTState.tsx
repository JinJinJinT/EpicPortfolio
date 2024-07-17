export interface Cell {
  value: "X" | "O" | "⠀";
  timeout: number;
  isFinal: boolean;
}

export interface Board {
  cells: Cell[][];
}

export interface Player {
  name: string;
  symbol: "X" | "O";
}

export interface GameState {
  board: Board;
  currentPlayer: Player;
  players: Player[];
}
