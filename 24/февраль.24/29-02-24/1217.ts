function minCostToMoveChips(position: number[]): number {
  const map: { [pos: number]: number } = {};
  for (const pos of position) {
    map[pos] = map[pos] ? map[pos] + 1 : 1;
  }

  const ans: number[] = [];
  for (const mm in map) {
    let b = 0;
    for (const pos in map) {
      const div = Math.abs(Number(pos) - Number(mm));
      if (div % 2 !== 0) b += 1 * map[pos];
    }
    ans.push(b);
  }
  return Math.min(...ans);
}
