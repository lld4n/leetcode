function minimumPushes(word: string): number {
  const map: { [key: string]: number } = {};
  for (const s of word) {
    if (map[s]) {
      map[s]++;
    } else {
      map[s] = 1;
    }
  }
  let list: { letter: string; count: number }[] = [];
  for (const key in map) {
    list.push({
      letter: key,
      count: map[key],
    });
  }
  list = list.sort((a, b) => b.count - a.count);
  let ans = 0;
  for (let i = 0; i < list.length; i++) {
    ans += (Math.floor(i / 8) + 1) * list[i].count;
  }
  return ans;
}
