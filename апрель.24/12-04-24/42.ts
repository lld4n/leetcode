function trap(height: number[]): number {
  const left: number[] = [height[0]];
  for (let i = 1; i < height.length; i++) {
    if (height[i] > left[left.length - 1]) {
      left.push(height[i]);
    } else {
      left.push(left[left.length - 1]);
    }
  }
  const right: number[] = [height[height.length - 1]];
  for (let i = height.length - 2; i >= 0; i--) {
    if (height[i] > right[0]) {
      right.unshift(height[i]);
    } else {
      right.unshift(right[0]);
    }
  }

  const list: number[] = [];
  for (let i = 0; i < height.length; i++) {
    list.push(Math.min(left[i], right[i]) - height[i]);
  }
  let ans = 0;
  for (const item of list) {
    if (item > 0) ans += item;
  }
  return ans;
}
