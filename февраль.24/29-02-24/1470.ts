function shuffle(nums: number[], n: number): number[] {
  let i = 0;
  let j = n + 1;
  const ans: number[] = [];
  while (i !== n + 1) {
    ans.push(nums[i]);
    ans.push(nums[j]);
    i++;
    j++;
  }
  return ans;
}
