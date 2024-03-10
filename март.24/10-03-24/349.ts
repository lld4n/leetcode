function intersection(nums1: number[], nums2: number[]): number[] {
  const set: Set<number> = new Set();
  for (const item of nums1) {
    if (nums2.includes(item)) {
      set.add(item);
    }
  }
  return Array.from(set);
}
