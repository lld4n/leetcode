function alternatingSubarray(nums: number[]): number {
  let ans = -1;

  const check = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (i % 2 === 0) {
        if (arr[i + 1] - arr[i] !== 1) {
          if (i === 0) return;
          ans = Math.max(ans, i + 1);
          return;
        }
      } else {
        if (arr[i] - arr[i + 1] !== 1) {
          if (i === 0) return;
          ans = Math.max(ans, i + 1);
          return;
        }
      }
    }
    ans = Math.max(ans, arr.length);
  };
  for (let i = 0; i < nums.length - 1; i++) {
    check(nums.slice(i));
  }
  return ans;
}
