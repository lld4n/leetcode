function largestInteger(nums: number[], k: number): number {
  const map: Record<number, number> = {};
  const len = nums.length;

  for (let i = 0; i <= len - k; i++) {
    const set: Set<number> = new Set();

    for (let j = i; j < i + k; j++) {
      if (set.has(nums[j])) continue;

      set.add(nums[j]);

      if (map[nums[j]]) map[nums[j]]++;
      else map[nums[j]] = 1;
    }
  }

  let ans = -1;

  for (const k in map) {
    if (map[k] === 1) ans = Math.max(ans, Number(k));
  }

  return ans;
}
