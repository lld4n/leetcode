function countNegatives(grid: number[][]): number {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j] < 0) ans++;
      else break;
    }
  }
  return ans;
}
