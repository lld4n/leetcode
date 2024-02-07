function minNumber(nums1: number[], nums2: number[]): number {
  let ans = Infinity;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        ans = Math.min(ans, nums2[j]);
      } else {
        ans = Math.min(
          ans,
          Number(
            String(Math.min(nums1[i], nums2[j])) +
              String(Math.max(nums1[i], nums2[j])),
          ),
        );
      }
    }
  }
  return ans;
}
