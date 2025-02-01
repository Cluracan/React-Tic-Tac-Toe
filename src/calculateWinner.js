export function checkResult(gameBoard) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    let winningLine = winningLines[i];
    if (
      gameBoard[winningLine[0]] &&
      gameBoard[winningLine[0]] === gameBoard[winningLine[1]] &&
      gameBoard[winningLine[0]] === gameBoard[winningLine[2]]
    ) {
      return { result: "win", winner: gameBoard[winningLine[0]] };
    }
  }

  if (gameBoard.every((cell) => cell !== null)) {
    return { result: "draw" };
  }

  return null;
}
