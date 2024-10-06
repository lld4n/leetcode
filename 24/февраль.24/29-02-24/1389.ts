function createTargetArray(
  nums: number[],
  index: number[],
): number[] {
  let ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const ind = index[i];
    if (ans[ind] === undefined) {
      ans.push(nums[i]);
    } else {
      ans = [...ans.slice(0, ind), nums[i], ...ans.slice(ind)];
    }
  }
  return ans;
}
