function minDays(grid: number[][]): number {
  const initial = count(grid);
  if (initial !== 1) return 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
        const c = count(grid);
        grid[i][j] = 1;

        if (c !== 1) return 1;
      }
    }
  }

  return 2;
}

function count(grid: number[][]): number {
  const buffer: number[][] = [];
  for (const item of grid) {
    buffer.push([...item]);
  }

  let ans = 0;

  const explore = (i: number, j: number) => {
    buffer[i][j] = 2;
    for (const dir of DIR) {
      if (buffer[i + dir.i]?.[j + dir.j] === 1) {
        explore(i + dir.i, j + dir.j);
      }
    }
  };

  for (let i = 0; i < buffer.length; i++) {
    for (let j = 0; j < buffer[i].length; j++) {
      if (buffer[i][j] === 1) {
        ans++;
        explore(i, j);
      }
    }
  }
  return ans;
}

const DIR = [
  { i: 1, j: 0 },
  { i: -1, j: 0 },
  { i: 0, j: 1 },
  { i: 0, j: -1 },
];
