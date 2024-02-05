function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const list: number[] = grid.flat().sort((a, b) => a - b);
  const ans: [number, number] = [-1, -1];
  for (let i = 1; i < list.length + 1; i++) {
    if (!list.includes(i)) {
      ans[1] = i;
    }
  }
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] === list[i + 1]) {
      ans[0] = list[i];
    }
  }

  return ans;
}
