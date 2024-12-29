function minimumOperations(grid: number[][]): number {
  let ans = 0;
  const coln = grid.length;

  const cols: number[][] = [];

  for (let i = 0; i < grid[0].length; i++) {
    const col: number[] = [];
    for (let j = 0; j < coln; j++) {
      col.push(grid[j][i]);
    }
    cols.push(col);
  }

  for (const col of cols) {
    for (let i = 1; i < col.length; i++) {
      if (col[i] <= col[i - 1]) {
        ans += col[i - 1] - col[i] + 1;
        col[i] = col[i - 1] + 1;
      }
    }
  }

  return ans;
}
