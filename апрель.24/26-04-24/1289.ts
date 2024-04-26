function minFallingPathSum(grid: number[][]): number {
  if (grid.length === 1) return grid[0][0];
  grid.unshift(new Array(grid[0].length).fill(0));
  for (let i = 1; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] += Math.min(
        ...grid[i - 1].map((e, index) => {
          if (index === j) {
            return Infinity;
          } else return e;
        }),
      );
    }
  }
  const p = grid.pop()!;
  return Math.min(...p);
}
