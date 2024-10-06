function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  const ans = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    const buffer: number[] = [];
    for (let j = 0; j < ans[i - 1].length - 1; j++) {
      buffer.push(ans[i - 1][j] + ans[i - 1][j + 1]);
    }
    buffer.push(1);
    buffer.unshift(1);
    ans.push(buffer);
  }
  return ans;
}
