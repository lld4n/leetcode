function getCommon(nums1: number[], nums2: number[]): number {
  for (const item of nums1) {
    if (binarySearch(nums2, item) !== -1) return item;
  }
  return -1;
}

function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
