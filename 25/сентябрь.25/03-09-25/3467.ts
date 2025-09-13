function transformArray(nums: number[]): number[] {
  const zero = [];
  const ones = [];

  for (const n of nums) {
    if (n % 2 === 0) zero.push(0);
    else ones.push(1);
  }

  return [...zero, ...ones];
}
