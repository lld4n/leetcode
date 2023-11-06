function exist(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (f(board, word, [{ x: j, y: i }], 1)) {
          return true;
        }
      }
    }
  }
  return false;
}

function f(
  board: string[][],
  word: string,
  indexes: { x: number; y: number }[],
  indexWord: number,
): boolean {
  if (indexWord === word.length) {
    return true;
  }
  let bool1 = false;
  let bool2 = false;
  let bool3 = false;
  let bool4 = false;
  const lastIndex = indexes[indexes.length - 1];
  if (
    board[lastIndex.y + 1] &&
    board[lastIndex.y + 1][lastIndex.x + 1] &&
    board[lastIndex.y + 1][lastIndex.x + 1] === word[indexWord]
  ) {
    let buffer = indexes.slice(0);
    buffer.push({
      x: lastIndex.x + 1,
      y: lastIndex.y + 1,
    });
    bool1 = f(board, word, buffer, indexWord + 1);
  }
  if (
    board[lastIndex.y + 1] &&
    board[lastIndex.y + 1][lastIndex.x - 1] &&
    board[lastIndex.y + 1][lastIndex.x - 1] === word[indexWord]
  ) {
    let buffer = indexes.slice(0);
    buffer.push({
      x: lastIndex.x - 1,
      y: lastIndex.y + 1,
    });
    bool2 = f(board, word, buffer, indexWord + 1);
  }
  if (
    board[lastIndex.y - 1] &&
    board[lastIndex.y - 1][lastIndex.x - 1] &&
    board[lastIndex.y - 1][lastIndex.x - 1] === word[indexWord]
  ) {
    let buffer = indexes.slice(0);

    buffer.push({
      x: lastIndex.x - 1,
      y: lastIndex.y - 1,
    });
    bool3 = f(board, word, buffer, indexWord + 1);
  }
  if (
    board[lastIndex.y - 1] &&
    board[lastIndex.y - 1][lastIndex.x + 1] &&
    board[lastIndex.y - 1][lastIndex.x + 1] === word[indexWord]
  ) {
    let buffer = indexes.slice(0);
    buffer.push({
      x: lastIndex.x + 1,
      y: lastIndex.y - 1,
    });
    bool4 = f(board, word, buffer, indexWord + 1);
  }

  return bool1 || bool2 || bool3 || bool4;
}
