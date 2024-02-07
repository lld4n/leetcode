function frequencySort(s: string): string {
  const map: { [key: number]: number } = {};
  for (const item of s) {
    map[item] = map[item] !== undefined ? map[item] + 1 : 1;
  }
  const list = Object.entries(map).sort((a, b) => b[1] - a[1]);
  let ans = "";
  for (const item of list) {
    ans += item[0].repeat(item[1]);
  }
  return ans;
}
