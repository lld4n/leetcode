function diagonalPrime(nums: number[][]): number {
  const prime = (num: number) => {
    if (num === 1) return false;
    if (num === 2) return true;
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if ((i === j || i + j === nums.length - 1) && prime(nums[i][j])) {
        ans = Math.max(ans, nums[i][j]);
      }
    }
  }
  return ans;
}
