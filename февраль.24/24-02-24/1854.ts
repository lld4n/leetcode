function maximumPopulation(logs: number[][]): number {
  const list: number[] = new Array(Math.max(...logs.flat()) + 1).fill(0);

  for (const item of logs) {
    const [s, e] = item;
    for (let i = s; i < e; i++) {
      list[i]++;
    }
  }
  return list.indexOf(Math.max(...list));
}
