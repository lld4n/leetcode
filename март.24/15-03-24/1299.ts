function replaceElements(arr: number[]): number[] {
  const ans: number[] = [-1];
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > ans[0]) {
      ans.unshift(arr[i]);
    } else {
      ans.unshift(ans[0]);
    }
  }
  return ans;
}
