function divideArray(nums: number[]): boolean {
  const map: { [key: number]: number } = {};
  for (const n of nums) map[n] = map[n] ? map[n] + 1 : 1;

  for (const key in map) {
    if (map[key] % 2 !== 0) return false;
  }
  return true;
}
