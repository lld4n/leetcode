function findDuplicates(nums: number[]): number[] {
  nums.unshift(0);
  let i = 1;
  while (i < nums.length) {
    const cur = nums[i];
    if (cur !== i) {
      if (nums[cur] === cur) {
        i++;
      } else {
        nums[i] = nums[cur];
        nums[cur] = cur;
      }
    } else {
      i++;
    }
  }

  const ans: number[] = [];
  for (let i = 1; i < nums.length; i++) {
    if (i !== nums[i]) {
      ans.push(nums[i]);
    }
  }

  return ans;
}
