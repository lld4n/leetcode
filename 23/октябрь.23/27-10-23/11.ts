function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let mm = -1;
  while (left !== right) {
    mm = Math.max(mm, (right - left) * Math.min(height[right], height[left]));
    if (height[left] < height[right]) {
      left++;
    } else if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return mm;
}
