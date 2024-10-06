function subarraySum(nums: number[], k: number): number {
  let curr = 0;
  let ans = 0;
  const map = new Map<number, number>();
  map.set(0, 1);
  for (const el of nums) {
    curr += el;
    ans += map.get(curr - k) || 0;
    map.set(curr, (map.get(curr) || 0) + 1);
  }
  return ans;
}
