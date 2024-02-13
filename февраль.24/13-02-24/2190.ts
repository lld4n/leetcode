function mostFrequent(nums: number[], key: number): number {
  const map: { [key: number]: number } = {};
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === key) {
      map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
    }
  }
  return Number(Object.entries(map).sort((a, b) => b[1] - a[1])[0][0]);
}
