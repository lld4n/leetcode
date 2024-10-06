function largestPerimeter(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  const prefix: number[] = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }
  const getSum = (s: number, e: number): number => {
    if (s === 0) {
      return prefix[e];
    } else {
      return prefix[e] - prefix[s - 1];
    }
  };
  let ans = -1;
  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1;
    while (j >= i + 2) {
      if (getSum(i, j - 1) > nums[j]) {
        ans = Math.max(getSum(i, j), ans);
        j = i;
      }
      j--;
    }
  }
  return ans;
}
