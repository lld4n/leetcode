function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let ans = 0;
  const check = (arr: number[]) => {
    if (arr[0] % 2 !== 0) return;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] % 2 === arr[i + 1] % 2) return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > threshold) return;
    }
    ans = Math.max(ans, arr.length);
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      check(nums.slice(i, j + 1));
    }
  }
  return ans;
}
