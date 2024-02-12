function findDifference(nums1: number[], nums2: number[]): number[][] {
  nums1 = Array.from(new Set(nums1));
  nums2 = Array.from(new Set(nums2));

  const first: number[] = [];
  for (const item of nums1) {
    if (!nums2.includes(item)) first.push(item);
  }
  const second: number[] = [];
  for (const item of nums2) {
    if (!nums1.includes(item)) second.push(item);
  }

  return [first, second];
}
