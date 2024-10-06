function subsetXORSum(nums: number[]): number {
  const subarray = (arr: number[]) => {
    const result: number[][] = [];
    const backtrack = (start: number, curr: number[]) => {
      result.push(curr.slice());
      for (let i = start; i < arr.length; i++) {
        curr.push(arr[i]);
        backtrack(i + 1, curr);
        curr.pop();
      }
    };
    backtrack(0, []);
    return result;
  };
  const x = (arr: number[]) => {
    if (arr.length === 0) return 0;
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
      res = res ^ arr[i];
    }
    return res;
  };
  let ans = 0;
  const itog = subarray(nums);
  for (const item of itog) {
    ans += x(item);
  }
  return ans;
}
