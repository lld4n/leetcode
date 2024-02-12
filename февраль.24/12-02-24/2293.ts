function minMaxGame(nums: number[]): number {
  while (nums.length !== 1) {
    const newNums = new Array(Math.floor(nums.length / 2)).fill(0);
    for (let i = 0; i < newNums.length; i++) {
      if (i % 2 === 0) {
        newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
      } else {
        newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
      }
    }
    nums = [...newNums];
  }
  return nums[0];
}
