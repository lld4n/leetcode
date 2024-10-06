function islandPerimeter(grid: number[][]): number {
  grid.push(new Array(grid[0].length).fill(0));
  grid.unshift(new Array(grid[0].length).fill(0));
  for (let i = 0; i < grid.length; i++) {
    grid[i].push(0);
    grid[i].unshift(0);
  }
  let ans = 0;

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      if (grid[i][j] === 1) {
        if (grid[i - 1][j] === 0) ans++;
        if (grid[i][j - 1] === 0) ans++;
        if (grid[i + 1][j] === 0) ans++;
        if (grid[i][j + 1] === 0) ans++;
      }
    }
  }
  return ans;
}
