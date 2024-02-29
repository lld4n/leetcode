function minStartValue(nums: number[]): number {
  const list: number[] = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    list.push(list[list.length - 1] + nums[i]);
  }
  const v = Math.min(...list);
  if (v < 0) {
    return Math.abs(v) + 2;
  } else {
    return 1;
  }
}
