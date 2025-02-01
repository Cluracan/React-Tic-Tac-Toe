import GameBoard from "./GameBoard";
import { useState } from "react";
import { checkResult } from "./calculateWinner";

export default function Game() {
  const [currentMove, setCurrentMove] = useState(0);
  const [gameHistory, setGameHistory] = useState([Array(9).fill(null)]);

  const currentCells = gameHistory[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const gameResult = checkResult(gameHistory[gameHistory.length - 1]);
  const gameInfo =
    gameResult && currentMove === gameHistory.length - 1 ? (
      <p>
        {gameResult.result === "win" ? `Winner: ${gameResult.winner}` : "Draw"}
      </p>
    ) : (
      <p>{`Move ${currentMove}`}</p>
    );
  function handleMove(nextGameCells) {
    const nextHistory = [
      ...gameHistory.slice(0, currentMove + 1),
      nextGameCells,
    ];
    setGameHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleRewind() {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
    }
  }

  function handleForward() {
    if (currentMove < gameHistory.length - 1) {
      setCurrentMove(currentMove + 1);
    }
  }

  return (
    <>
      <div className="game">
        <div className="game-board">
          <GameBoard
            xIsNext={xIsNext}
            cells={currentCells}
            onMove={handleMove}
          />
        </div>
        <div className="game-info">
          Game Info
          {gameInfo}
        </div>
      </div>
      <button className="move-button" onClick={handleRewind}>
        &lt;
      </button>
      <button className="move-button" onClick={handleForward}>
        &gt;
      </button>
    </>
  );
}
