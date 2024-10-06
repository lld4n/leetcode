function intersect(nums1: number[], nums2: number[]): number[] {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  const ans: number[] = [];
  while (i < nums1.length && j < nums2.length) {
    while (nums1[i] < nums2[j]) {
      i++;
    }
    while (nums1[i] > nums2[j]) {
      j++;
    }
    if (nums1[i] === nums2[j]) {
      ans.push(nums1[i]);
      i++;
      j++;
    }
  }
  return ans;
}
