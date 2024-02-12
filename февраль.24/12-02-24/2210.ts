function countHillValley(nums: number[]): number {
  const list: number[] = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== list[list.length - 1]) {
      list.push(nums[i]);
    }
  }
  let ans = 0;
  for (let i = 1; i < list.length - 1; i++) {
    if (list[i - 1] < list[i] && list[i + 1] < list[i]) ans++;

    if (list[i - 1] > list[i] && list[i + 1] > list[i]) ans++;
  }
  return ans;
}
