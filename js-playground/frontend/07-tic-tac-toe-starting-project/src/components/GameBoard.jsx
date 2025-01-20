import { useState } from "react"
import { INITIAL_GAME_BOARD } from "../data/gameData"

const handleSelectSquare = (rowIndex, colIndex, setGameBoard) => {
  setGameBoard((prevGameBoard) => {
    if (prevGameBoard[rowIndex][colIndex] != null) {
      return prevGameBoard;
    }

    const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    updatedBoard[rowIndex][colIndex] = "X";
    return updatedBoard;
  });
}

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex, setGameBoard)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}