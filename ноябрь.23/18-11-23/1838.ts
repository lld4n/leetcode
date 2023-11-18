/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxFrequency(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let maxFrequency: number = 1;
  let left: number = 0;

  for (let right: number = 1; right < nums.length; ++right) {
    k -= (nums[right] - nums[right - 1]) * (right - left);

    while (k < 0) {
      k += nums[right] - nums[left];
      left++;
    }

    maxFrequency = Math.max(maxFrequency, right - left + 1);
  }

  return maxFrequency;
}
