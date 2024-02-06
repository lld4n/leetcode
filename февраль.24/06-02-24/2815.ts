function maxSum(nums: number[]): number {
  let ans = -1;
  for (let i = 0; i < nums.length; i++) {
    const mi = Math.max(...String(nums[i]).split("").map(Number));
    for (let j = i + 1; j < nums.length; j++) {
      const mj = Math.max(...String(nums[j]).split("").map(Number));
      if (mi === mj) ans = Math.max(ans, nums[i] + nums[j]);
    }
  }
  return ans;
}
