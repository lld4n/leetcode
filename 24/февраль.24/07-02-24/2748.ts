function countBeautifulPairs(nums: number[]): number {
  const gcd = (a: number, b: number) => {
    if (b) {
      return gcd(b, a % b);
    } else {
      return Math.abs(a);
    }
  };
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      ans += gcd(Number(String(nums[i])[0]), nums[j] % 10) === 1 ? 1 : 0;
    }
  }
  return ans;
}
