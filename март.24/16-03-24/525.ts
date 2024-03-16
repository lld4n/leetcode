function findMaxLength(nums: number[]): number {
  let c = 0;
  const map: { [key: number]: number } = {};
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    c += nums[i] === 1 ? 1 : -1;
    if (c === 0) {
      ans = Math.max(ans, i + 1);
    }
    if (map[c] !== undefined) {
      ans = Math.max(ans, i - map[c]);
    } else {
      map[c] = i;
    }
    // s.push(c);
  }

  return ans;
}
