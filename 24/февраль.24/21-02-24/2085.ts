function countWords(words1: string[], words2: string[]): number {
  const createMap = (str: string[]): string[] => {
    const map: { [key: string]: number } = {};
    for (const item of str) {
      map[item] = map[item] ? map[item] + 1 : 1;
    }
    const res: string[] = [];
    for (const key in map) {
      if (map[key] === 1) {
        res.push(key);
      }
    }
    return res;
  };

  const r1 = createMap(words1);
  const r2 = createMap(words2);
  let ans = 0;
  for (const item of r1) {
    if (r2.includes(item)) ans++;
  }
  return ans;
}
