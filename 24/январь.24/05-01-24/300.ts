function lengthOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(0);
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    const buffer: number[] = [];
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        buffer.push(dp[j] + 1);
      }
    }
    if (buffer.length > 0) {
      dp[i] = Math.max(...buffer);
    } else {
      dp[i] = 1;
    }
  }
  console.log(dp);
  return Math.max(...dp);
}
