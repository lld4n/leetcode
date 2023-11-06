function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let i1 = 0;
  let i2 = 0;
  let arr: number[] = [];
  while (i1 < nums1.length && i2 < nums2.length) {
    if (nums1[i1] < nums2[i2]) {
      arr.push(nums1[i1]);
      i1++;
    } else {
      arr.push(nums2[i2]);
      i2++;
    }
  }
  while (i2 < nums2.length) {
    arr.push(nums2[i2]);
    i2++;
  }

  while (i1 < nums1.length) {
    arr.push(nums1[i1]);
    i1++;
  }

  if (arr.length % 2 === 0) {
    return (arr[Math.floor(arr.length / 2) - 1] + arr[Math.floor(arr.length / 2)]) / 2;
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
}
