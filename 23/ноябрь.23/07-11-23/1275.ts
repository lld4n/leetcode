function tictactoe(moves: number[][]): string {
  let wins = [
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];
  let list: string[][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  for (let i = 0; i < moves.length; i++) {
    if (i % 2 === 0) {
      list[moves[i][0]][moves[i][1]] = "A";
    } else {
      list[moves[i][0]][moves[i][1]] = "B";
    }
  }
  for (let element of wins) {
    if (
      list[element[0][0]][element[0][1]] ===
        list[element[1][0]][element[1][1]] &&
      list[element[1][0]][element[1][1]] ===
        list[element[2][0]][element[2][1]] &&
      list[element[0][0]][element[0][1]] !== ""
    ) {
      return list[element[0][0]][element[0][1]];
    }
  }

  if (moves.length === 9) return "Draw";
  return "Pending";
}
