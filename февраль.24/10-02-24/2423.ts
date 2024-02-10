function equalFrequency(word: string): boolean {
  const map: { [key: string]: number } = {};
  for (const item of word) {
    map[item] = map[item] ? map[item] + 1 : 1;
  }
  const list = Object.values(map);
  for (let i = 0; i < list.length; i++) {
    list[i]--;
    if (new Set(list).size === 1) return true;
    if (new Set(list).size === 2 && list.includes(0)) return true;
    list[i]++;
  }
  return false;
}
