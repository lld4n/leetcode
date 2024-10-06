function mostVisited(n: number, rounds: number[]): number[] {
  const list: number[] = new Array(n).fill(0);
  rounds = rounds.map((e) => e - 1);

  for (let i = 0; i < rounds.length - 1; i++) {
    const s = rounds[i];
    const e = rounds[i + 1];
    if (s <= e) {
      for (let j = s; j <= e; j++) {
        list[j]++;
      }
    } else {
      for (let j = s; j < list.length; j++) {
        list[j]++;
      }
      for (let j = 0; j <= e; j++) {
        list[j]++;
      }
    }
  }
  const mm = Math.max(...list);
  const ans: number[] = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] === mm) ans.push(i + 1);
  }
  return ans;
}
