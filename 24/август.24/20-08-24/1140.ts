function stoneGameII(piles: number[]): number {
  const total = piles.length;
  const suffixSums = new Array(total + 1).fill(0);
  for (let i = total - 1; i >= 0; i--) {
    suffixSums[i] = suffixSums[i + 1] + piles[i];
  }
  const memo: number[][] = Array.from({ length: total }, () =>
    new Array(total + 1).fill(0),
  );
  return hand(suffixSums, 1, 0, memo);
}

function hand(
  suffixSums: number[],
  m: number,
  currentPile: number,
  memo: number[][],
): number {
  const total = suffixSums.length - 1;
  if (currentPile >= total) return 0;
  if (currentPile + 2 * m >= total) {
    return suffixSums[currentPile];
  }
  if (memo[currentPile][m] !== 0) return memo[currentPile][m];

  let maxStones = 0;
  for (let x = 1; x <= 2 * m; x++) {
    const currentStones =
      suffixSums[currentPile] -
      hand(suffixSums, Math.max(m, x), currentPile + x, memo);
    maxStones = Math.max(maxStones, currentStones);
  }
  memo[currentPile][m] = maxStones;
  return maxStones;
}
