function maxAscendingSum(nums: number[]): number {
  const c = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) return false;
    }
    return true;
  };
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const arr = nums.slice(i, j + 1);
      if (c(arr)) {
        ans = Math.max(ans, _.sum(arr));
      }
    }
  }
  return ans;
}
