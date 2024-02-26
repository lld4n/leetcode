function sumOfUnique(nums: number[]): number {
  const map: { [n: number]: number } = {};
  for (const n of nums) map[n] = map[n] ? map[n] + 1 : 1;
  let ans = 0;
  for (const key in map) {
    if (map[key] === 1) ans += Number(key);
  }
  return ans;
}
