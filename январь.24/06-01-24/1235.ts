function jobScheduling(
  startTime: number[],
  endTime: number[],
  profit: number[],
): number {
  const list: number[][] = new Array(startTime.length)
    .fill(0)
    .map((_, i) => {
      return [startTime[i], endTime[i], profit[i]];
    })
    .sort((a, b) => a[1] - b[1]);
  const p = (j: number): number => {
    const s = list[j][0];
    for (let i = j - 1; i >= 0; i--) {
      if (s >= list[i][1]) {
        return i + 1;
      }
    }
    return 0;
  };
  const m = new Array(list.length + 1).fill(0);
  for (let i = 1; i < m.length; i++) {
    m[i] = Math.max(list[i - 1][2] + m[p(i - 1)], m[i - 1]);
  }
  return m[list.length];
}
