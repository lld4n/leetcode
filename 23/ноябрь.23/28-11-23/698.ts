function canPartitionKSubsets(nums: number[], k: number): boolean {
  let sum = 0;
  for (let el of nums) sum += el;
  if (!Number.isInteger(sum / k)) return false;
}
