function regionsBySlashes(grid: string[]): number {
  const n = grid.length;
  const table: boolean[][] = [];

  for (let i = 0; i < n * 3; i++) {
    const b: boolean[] = [];
    for (let j = 0; j < n * 3; j++) {
      b.push(false);
    }
    table.push(b);
  }

  for (let col = 0; col < n; col++) {
    for (let row = 0; row < n; row++) {
      if (grid[row][col] === "/") {
        table[row * 3][col * 3 + 2] = true;
        table[row * 3 + 1][col * 3 + 1] = true;
        table[row * 3 + 2][col * 3] = true;
      } else if (grid[row][col] === "\\") {
        table[row * 3][col * 3] = true;
        table[row * 3 + 1][col * 3 + 1] = true;
        table[row * 3 + 2][col * 3 + 2] = true;
      }
    }
  }

  const helper = (i: number, j: number) => {
    table[i][j] = true;
    for (const dir of DIR) {
      if (table[i + dir.i]?.[j + dir.j] === false) {
        helper(i + dir.i, j + dir.j);
      }
    }
  };

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (table[i][j]) {
        continue;
      }

      ans++;
      helper(i, j);
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
