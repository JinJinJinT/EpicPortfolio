"use client";

import React, { useState } from "react";
import { Board, Player, GameState, Cell } from "./TTTState";

const Page = () => {
  const MAX_TIMEOUT = 6;
  const [gameOver, setGameOver] = useState(false);

  let stagedBoard: { cells: Cell[][] } = {
    cells: [[], [], []],
  };

  stagedBoard.cells.forEach(row => {
    for (let i = 0; i < 3; i++) {
      row.push({ value: "⠀", timeout: MAX_TIMEOUT, isFinal: false });
    }
  });

  const initialBoard: Board = stagedBoard;

  const initialPlayers: Player[] = [
    { name: "Melanie", symbol: "X" },
    { name: "Jin", symbol: "O" },
  ];

  const [gameState, setGameState] = useState<GameState>({
    board: initialBoard,
    currentPlayer: initialPlayers[0],
    players: initialPlayers,
  });

  const checkGameOver = () => {
    if (gameState.board.cells[0][0].value !== "⠀") {
      if (
        gameState.board.cells[0][0].value ===
          gameState.board.cells[1][1].value &&
        gameState.board.cells[1][1].value === gameState.board.cells[2][2].value
      ) {
        return true;
      }
    }

    if (gameState.board.cells[0][2].value !== "⠀") {
      if (
        gameState.board.cells[0][2].value ===
          gameState.board.cells[1][1].value &&
        gameState.board.cells[1][1].value === gameState.board.cells[2][0].value
      ) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (gameState.board.cells[i][0].value !== "⠀") {
        if (
          gameState.board.cells[i][0].value ===
            gameState.board.cells[i][1].value &&
          gameState.board.cells[i][1].value ===
            gameState.board.cells[i][2].value
        ) {
          return true;
        }
      }
    }

    for (let i = 0; i < 3; i++) {
      if (gameState.board.cells[0][i].value !== "⠀") {
        if (
          gameState.board.cells[0][i].value ===
            gameState.board.cells[1][i].value &&
          gameState.board.cells[1][i].value ===
            gameState.board.cells[2][i].value
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const handleMove = (row: number, col: number) => {
    if (!gameOver) {
      const newBoard = { ...gameState.board };
      if (newBoard.cells[row][col].value === "⠀") {
        newBoard.cells[row][col].value = gameState.currentPlayer.symbol;
        const nextPlayer =
          gameState.currentPlayer.symbol === "X"
            ? gameState.players[1]
            : gameState.players[0];

        for (let i = 0; i < newBoard.cells.length; i++) {
          for (let j = 0; j < newBoard.cells[i].length; j++) {
            if (newBoard.cells[i][j].value !== "⠀") {
              if (newBoard.cells[i][j].timeout === 0) {
                newBoard.cells[i][j].value = "⠀";
                newBoard.cells[i][j].timeout = MAX_TIMEOUT;
                newBoard.cells[i][j].isFinal = false;
              } else {
                if (newBoard.cells[i][j].timeout === 1) {
                  newBoard.cells[i][j].isFinal = true;
                }
                newBoard.cells[i][j].timeout--;
              }
            }
          }
        }

        const gameOver = checkGameOver();
        setGameOver(gameOver);
        setGameState({
          ...gameState,
          board: newBoard,
          currentPlayer: nextPlayer,
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div className="text-3xl text-secondary dark:text-base-100 flex flex-col justify-center items-center m-3">
        <h1 className="">Infinite TicTacToe!</h1>
        {gameOver ? (
          <div className="flex justify-center items-center flex-col">
            <h1>
              Game Over!{" "}
              {gameState.currentPlayer.name === gameState.players[0].name
                ? gameState.players[1].name
                : gameState.players[0].name}{" "}
              Wins
            </h1>
            <button
              onClick={() => {
                setGameState({
                  ...gameState,
                  board: initialBoard,
                  currentPlayer: initialPlayers[0],
                });
                setGameOver(false);
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1"
            >
              Play Again?
            </button>
          </div>
        ) : (
          <h1>Current player: {gameState.currentPlayer.name}</h1>
        )}
      </div>
      <div
        id="board"
        className="relative border-4 border-dashed border-pink-200 dark:border-orange-600 h-full p-7"
      >
        <div className="grid grid-cols-3 gap-2 w-[60vw] h-[60vw] max-w-[60vh] max-h-[60vh] ">
          {gameState.board.cells.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`bg-white dark:bg-stone-700 border border-gray-400 flex items-center justify-center text-2xl dark:text-base-100 font-bold cursor-pointer ${
                  cell.isFinal && "final-ttt-cell"
                }`}
                onClick={() => handleMove(rowIndex, colIndex)}
              >
                {cell.value}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
