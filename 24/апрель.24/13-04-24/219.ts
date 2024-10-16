function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      if (Math.abs(map[nums[i]] - i) <= k) return true;
      map[nums[i]] = i;
    } else {
      map[nums[i]] = i;
    }
  }
  return false;
}
