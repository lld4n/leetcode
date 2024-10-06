function maxOperations(nums: number[]): number {
  let ans = 1;
  const s = nums.shift()! + nums.shift()!;
  while (nums.length > 1) {
    const b = nums.shift()! + nums.shift()!;
    if (b === s) ans++;
    else break;
  }
  return ans;
}
