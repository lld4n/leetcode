function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number,
): number {
  const MOD = 1000000007;
  const memo: number[][][] = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => new Array(maxMove + 1).fill(undefined)),
  );
  function dfs(startRow: number, startColumn: number, maxMove: number): number {
    if (startRow >= 0 && startRow < m && startColumn >= 0 && startColumn < n) {
      if (maxMove === 0) return 0;
      if (memo[startRow][startColumn][maxMove] !== undefined) {
        return memo[startRow][startColumn][maxMove];
      }
      const up = dfs(startRow - 1, startColumn, maxMove - 1);
      const down = dfs(startRow + 1, startColumn, maxMove - 1);
      const left = dfs(startRow, startColumn - 1, maxMove - 1);
      const right = dfs(startRow, startColumn + 1, maxMove - 1);

      return (memo[startRow][startColumn][maxMove] =
        (up + down + left + right) % MOD);
    } else return 1;
  }
  return dfs(startRow, startColumn, maxMove);
}
