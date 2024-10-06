function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  arr = arr.sort((a, b) => a - b);

  if (arr[0] !== 1) {
    arr[0] = 1;
  }

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) > 1) {
      arr[i] = arr[i - 1] + 1;
    }
  }

  return arr[arr.length - 1];
}
