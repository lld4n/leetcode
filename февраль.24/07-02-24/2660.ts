function isWinner(player1: number[], player2: number[]): number {
  const detect = (arr: number[]) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
      if (
        (arr[i - 1] && arr[i - 1] === 10) ||
        (arr[i - 2] && arr[i - 2] === 10)
      ) {
        res += 2 * arr[i];
      } else {
        res += arr[i];
      }
    }
    return res;
  };
  const p1 = detect(player1);
  const p2 = detect(player2);
  if (p1 > p2) {
    return 1;
  } else if (p1 < p2) {
    return 2;
  } else {
    return 0;
  }
}
