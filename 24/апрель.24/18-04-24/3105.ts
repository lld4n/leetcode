function longestMonotonicSubarray(nums: number[]): number {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let q = 1;
    for (let j = i; j < nums.length - 1; j++) {
      if (nums[j] < nums[j + 1]) {
        q++;
      } else {
        ans = Math.max(ans, q);
        break;
      }
    }
    ans = Math.max(ans, q);
    q = 1;
    for (let j = i; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        q++;
      } else {
        ans = Math.max(ans, q);
        break;
      }
    }
    ans = Math.max(ans, q);
  }
  return ans;
}
