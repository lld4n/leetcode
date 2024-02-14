function rearrangeArray(nums: number[]): number[] {
  const ans: number[] = [];
  let neg = 0;
  let pos = 0;

  while (nums[neg] > 0) {
    neg++;
  }
  while (nums[pos] < 0) {
    pos++;
  }

  while (ans.length !== nums.length) {
    if (ans.length % 2 === 0) {
      ans.push(nums[pos]);
      pos++;
      while (nums[pos] < 0) {
        pos++;
      }
    } else {
      ans.push(nums[neg]);
      neg++;
      while (nums[neg] > 0) {
        neg++;
      }
    }
  }
  return ans;
}
