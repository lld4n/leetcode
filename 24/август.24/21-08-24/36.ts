function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    console.log(board[i].join("\t") + "\n");
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      for (let k = j + 1; k < 9; k++) {
        if (board[i][j] !== "." && board[i][j] === board[i][k]) {
          console.log([i, j], [i, k]);
          return false;
        }

        if (board[j][i] !== "." && board[j][i] === board[k][i]) {
          console.log([j, i], [k, i]);
          return false;
        }
      }
    }
  }

  const coor: [number, number][] = [
    [0, 0],
    [0, 3],
    [0, 6],
    [3, 0],
    [3, 3],
    [3, 6],
    [6, 0],
    [6, 3],
    [6, 6],
  ];

  for (const [x, y] of coor) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          for (let l = 0; l < 3; l++) {
            if (
              board[x + i][y + j] !== "." &&
              x + i !== x + k &&
              y + j !== y + l &&
              board[x + i][y + j] === board[x + k][y + l]
            ) {
              console.log("52", [x + i, y + j], [x + k, y + l]);
              return false;
            }
          }
        }
      }
    }
  }

  return true;
}
