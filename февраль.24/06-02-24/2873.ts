function maximumTripletValue(nums: number[]): number {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        ans = Math.max(ans, (nums[i] - nums[j]) * nums[k]);
      }
    }
  }
  return ans;
}
