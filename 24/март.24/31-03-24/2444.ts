function countSubarrays(
  nums: number[],
  minK: number,
  maxK: number,
): number {
  let ans = 0;
  let lb = -1;
  let maxi = -1;
  let mini = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      lb = i;
    }
    if (nums[i] === minK) {
      mini = i;
    }
    if (nums[i] === maxK) {
      maxi = i;
    }

    const smaller = Math.min(mini, maxi);
    ans += Math.max(0, smaller - lb);
  }
  return ans;
}
