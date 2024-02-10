function deleteGreatestValue(grid: number[][]): number {
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].sort((a, b) => a - b);
  }
  let ans = 0;
  while (grid[0].length !== 0) {
    let buffer = -1;
    for (let j = 0; j < grid.length; j++) {
      const lst = grid[j].pop();
      buffer = Math.max(lst, buffer);
    }
    console.log(grid);
    ans += buffer;
  }
  return ans;
}
