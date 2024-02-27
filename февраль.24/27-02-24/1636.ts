function frequencySort(nums: number[]): number[] {
  const map: { [key: number]: number } = {};
  for (const n of nums) map[n] = map[n] ? map[n] + 1 : 1;

  return Object.entries(map)
    .sort((a, b) => {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
      if (Number(a[0]) > Number(b[0])) return -1;
      if (Number(a[0]) < Number(b[0])) return 1;
      return 0;
    })
    .map((e) => {
      const cur = Number(e[0]);
      const b: number[] = [];
      for (let i = 0; i < e[1]; i++) {
        b.push(cur);
      }
      return b;
    })
    .flat();
}
