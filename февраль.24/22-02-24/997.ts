function findJudge(n: number, trust: number[][]): number {
  if (n === 1 && trust.length === 0) return 1;
  trust = trust.sort((a, b) => a[1] - b[1]);
  const map: { [key: number]: number } = {};
  for (const item of trust) {
    map[item[1]] = map[item[1]] ? map[item[1]] + 1 : 1;
  }
  for (const key in map) {
    if (map[key] === n - 1) {
      const b = trust.filter((e) => e[0] === Number(key)).length;
      if (b === 0) {
        return Number(key);
      }
    }
  }
  return -1;
}
