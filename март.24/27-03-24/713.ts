function numSubarrayProductLessThanK(
  nums: number[],
  k: number,
): number {
  if (k === 0) return 0;

  const m = (arr: number[]): number => {
    let res = 1;
    for (const item of arr) {
      res = res * item;
    }
    return res;
  };
  if (m(nums) < k) {
    return (nums.length * (nums.length + 1)) / 2;
  }
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (m(nums.slice(i, j + 1)) < k) ans++;
      else break;
    }
  }

  return ans;
}
