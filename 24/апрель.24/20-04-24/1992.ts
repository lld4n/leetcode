function findFarmland(land: number[][]): number[][] {
  const dfs = (i: number, j: number): [number, number] => {
    if (
      i >= land.length ||
      i < 0 ||
      j >= land[0].length ||
      j < 0 ||
      land[i][j] === 0
    ) {
      return [-1, -1];
    }
    land[i][j] = 0;
    const d1 = dfs(i + 1, j);
    const d2 = dfs(i - 1, j);
    const d3 = dfs(i, j + 1);
    const d4 = dfs(i, j - 1);
    return [
      Math.max(i, d1[0], d2[0], d3[0], d4[0]),
      Math.max(j, d1[1], d2[1], d3[1], d4[1]),
    ];
  };
  let ans: number[][] = [];
  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[i].length; j++) {
      if (land[i][j] === 1) {
        const q = dfs(i, j);
        ans.push([i, j, q[0], q[1]]);
      }
    }
  }
  return ans;
}
