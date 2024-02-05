function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const ans: [number, number] = [0, 0];
  for (const el of nums1) {
    if (nums2.includes(el)) ans[0]++;
  }
  for (const el of nums2) {
    if (nums1.includes(el)) ans[1]++;
  }
  return ans;
}
