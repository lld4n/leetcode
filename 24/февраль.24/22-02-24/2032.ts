function twoOutOfThree(
  nums1: number[],
  nums2: number[],
  nums3: number[],
): number[] {
  const set: Set<number> = new Set();

  for (const item of nums1) {
    if (nums2.includes(item) || nums3.includes(item)) {
      set.add(item);
    }
  }
  for (const item of nums2) {
    if (nums1.includes(item) || nums3.includes(item)) {
      set.add(item);
    }
  }
  return Array.from(set);
}
