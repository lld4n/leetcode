function judgeCircle(moves: string): boolean {
  let x = 0;
  let y = 0;
  for (let elem of moves.split("")) {
    if (elem === "R") {
      x++;
    } else if (elem === "L") {
      x--;
    } else if (elem === "U") {
      y++;
    } else {
      y--;
    }
  }
  return x === 0 && y === 0;
}
