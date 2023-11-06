function findColumnWidth(grid: number[][]): number[] {
  let result = new Array(grid[0].length).fill(-Infinity);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      result[j] = Math.max(String(grid[i][j]).length, result[j]);
    }
  }
  return result;
}
