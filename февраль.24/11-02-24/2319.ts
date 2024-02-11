function checkXMatrix(grid: number[][]): boolean {
  const n = grid.length - 1;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === j) {
        if (grid[i][j] === 0) return false;
      } else if (i + j === n) {
        if (grid[i][j] === 0) return false;
      } else if (grid[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}
