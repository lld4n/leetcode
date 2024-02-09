function findTheArrayConcVal(nums: number[]): number {
  let ans = 0;
  while (nums.length !== 0) {
    if (nums.length > 1) {
      const lst = nums.pop();
      const frs = nums.shift();
      ans += Number(String(frs) + String(lst));
    } else {
      const lst = nums.pop();
      ans += lst;
    }
  }
  return ans;
}
