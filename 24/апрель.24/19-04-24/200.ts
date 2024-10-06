function numIslands(grid: string[][]): number {
  const dfs = (i: number, j: number) => {
    if (
      i >= grid.length ||
      i < 0 ||
      j >= grid[0].length ||
      j < 0 ||
      grid[i][j] === "0"
    ) {
      return;
    }
    grid[i][j] = "0";
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        ans++;
      }
    }
  }
  return ans;
}
