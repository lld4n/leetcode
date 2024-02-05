function maxFrequencyElements(nums: number[]): number {
  const map: { [key: number]: number } = {};
  for (const el of nums) map[el] = map[el] ? map[el] + 1 : 1;
  const max = Math.max(...Object.values(map));
  let ans = 0;
  for (const key in map) {
    if (map[key] === max) ans += max;
  }
  return ans;
}
