function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  const prefix: number[][] = [];
  for (let i = 0; i < matrix.length + 1; i++) {
    prefix.push(new Array(matrix[0].length + 1).fill(0));
  }
  for (let i = 1; i < prefix.length; i++) {
    for (let j = 1; j < prefix[i].length; j++) {
      prefix[i][j] =
        matrix[i - 1][j - 1] +
        prefix[i - 1][j] +
        prefix[i][j - 1] -
        prefix[i - 1][j - 1];
    }
  }
  let ans = 0;
  const n = matrix.length + 1;
  const m = matrix[0].length + 1;
  for (let x1 = 1; x1 < m; x1++) {
    for (let x2 = x1; x2 < m; x2++) {
      for (let y1 = 1; y1 < n; y1++) {
        for (let y2 = y1; y2 < n; y2++) {
          const pl =
            prefix[y2][x2] -
            prefix[y1 - 1][x2] -
            prefix[y2][x1 - 1] +
            prefix[y1 - 1][x1 - 1];
          if (pl === target) ans++;
        }
      }
    }
  }

  return ans;
}
