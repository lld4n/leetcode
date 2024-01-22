function findErrorNums(nums: number[]): number[] {
  const map: {
    [key: number]: number;
  } = {};
  for (let i = 1; i <= nums.length; i++) {
    map[i] = 0;
  }
  for (const el of nums) {
    map[el]++;
  }
  const ans: [number, number] = [-1, -1];
  for (const key in map) {
    if (map[key] === 0) {
      ans[0] = Number(key);
    }
    if (map[key] === 2) {
      ans[1] = Number(key);
    }
  }
  return ans;
}
