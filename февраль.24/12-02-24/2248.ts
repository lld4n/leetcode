function intersection(nums: number[][]): number[] {
  const ans: number[] = [];
  for (const n of nums[0]) {
    let flag = true;
    for (const arr of nums) {
      if (!arr.includes(n)) {
        flag = false;
        break;
      }
    }
    if (flag) ans.push(n);
  }
  return ans.sort((a, b) => a - b);
}
