import Square from "./Square";
import { checkResult } from "./calculateWinner";

export default function GameBoard({ xIsNext, cells, onMove }) {
  function handleClick(cellIndex) {
    if (cells[cellIndex] || checkResult(cells)) {
      console.log("win");
      return;
    }

    let nextCells = cells.slice();
    nextCells[cellIndex] = xIsNext ? "X" : "O";
    onMove(nextCells);
  }

  return (
    <>
      {cells.map((value, cellIndex) => (
        <Square
          key={`cell-${cellIndex}`}
          value={value}
          onSquareClick={() => handleClick(cellIndex)}
        />
      ))}
    </>
  );
}
