function incremovableSubarrayCount(nums: number[]): number {
  const check = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) return false;
    }
    return true;
  };
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (check([...nums.slice(0, i), ...nums.slice(j + 1)])) {
        ans++;
      }
    }
  }
  return ans;
}
