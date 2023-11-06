function getWinner(arr: number[], k: number): number {
  let count = 0;
  let winner = arr[0];
  let qu: number[] = [];
  for (let i = 1; i < arr.length; i++) {
    qu.push(arr[i]);
  }
  while (count !== k) {
    const element = qu.shift();
    if (winner > element) {
      count++;
      qu.push(element);
    } else {
      count = 1;
      qu.push(winner);
      winner = element;
    }
  }

  return winner;
}
