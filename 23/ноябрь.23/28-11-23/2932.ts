function maximumStrongPairXor(nums: number[]): number {
  let answer: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
        answer.push(nums[i] ^ nums[j]);
      }
    }
  }
  return Math.max(...answer);
}
