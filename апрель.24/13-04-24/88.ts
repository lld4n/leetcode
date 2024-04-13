/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  const itog: number[] = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      itog.push(nums1[i]);
      i++;
    } else {
      itog.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    itog.push(nums1[i]);
    i++;
  }
  while (j < n) {
    itog.push(nums2[j]);
    j++;
  }

  for (let q = 0; q < nums1.length; q++) {
    nums1[q] = itog[q];
  }
}
