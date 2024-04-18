function nextGreaterElement(
  nums1: number[],
  nums2: number[],
): number[] {
  const ans: number[] = new Array(nums1.length).fill(-1);

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        for (let k = j + 1; k < nums2.length; k++) {
          if (nums2[k] > nums2[j]) {
            ans[i] = nums2[k];
            break;
          }
        }
      }
    }
  }
  return ans;
}
