function numberOfPairs(nums: number[]): number[] {
  nums = nums.sort((a, b) => a - b);
  let n = nums.length;
  let count = 0;
  while (nums.length !== 0) {
    if (nums.length < 2) {
      nums = [];
    } else {
      const frs = nums.shift();
      const scd = nums.shift();
      if (frs === scd) {
        count++;
      } else {
        if (scd) nums.unshift(scd);
      }
    }
  }
  return [count, n - count * 2];
}
