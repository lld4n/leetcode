function largestLocal(grid: number[][]): number[][] {
  const coor: [number, number][] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const ans: number[][] = [];
  for (let i = 1; i < grid.length - 1; i++) {
    const buffer: number[] = [];
    for (let j = 1; j < grid[i].length - 1; j++) {
      let m = -Infinity;
      for (const c of coor) {
        m = Math.max(m, grid[c[0] + i][c[1] + j]);
      }
      buffer.push(m);
    }
    ans.push(buffer);
  }
  return ans;
}
