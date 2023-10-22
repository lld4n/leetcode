function sumSubseqWidths(nums: number[]): number {
  const mod = 1000000007;
  const sorted = nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      result += (((sorted[j] - sorted[i]) % mod) * (pow(j - i - 1) % mod)) % mod;
      if (result >= mod) {
        result = result % mod;
      }
    }
  }
  return result % mod;
}

function pow(count: number) {
  const mod = 1000000007;
  let res = 1;
  for (let i = 1; i <= count; i++) {
    res = (res * 2) % mod;
  }
  return res;
}

// function sumSubseqWidths(nums: number[]): number {
//   const mod = 1000000007;
//   nums.sort((a, b) => a - b);
//   let total = 0;
//   let power = 1;
//   for (let i = 0; i < nums.length; i++) {
//     total = (total + nums[i] * power) % mod;
//     power = (power * 2) % mod;
//   }

//   power = 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     total = (total - nums[i] * power + mod) % mod;
//     power = (power * 2) % mod;
//   }

//   return (total + mod) % mod;
// }
