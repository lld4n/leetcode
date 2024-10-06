function smallerNumbersThanCurrent(nums: number[]): number[] {
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let c = 0;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i && nums[j] < nums[i]) c++;
    }
    ans.push(c);
  }
  return ans;
}
