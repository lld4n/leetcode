function maxCoins(piles: number[]): number {
  piles = piles.sort((a, b) => a - b);
  let answer = 0;
  while (piles.length !== 0) {
    piles.shift();
    piles.pop();
    const el = piles.pop();
    if (el) {
      answer += el;
    }
  }
  return answer;
}
