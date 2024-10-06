function hardestWorker(n: number, logs: number[][]): number {
  const list: number[] = new Array(n + 1).fill(0);
  list[logs[0][0]] = Math.max(list[logs[0][0]], logs[0][1]);
  for (let i = 1; i < logs.length; i++) {
    list[logs[i][0]] = Math.max(list[logs[i][0]], logs[i][1] - logs[i - 1][1]);
  }
  return list.indexOf(Math.max(...list));
}
