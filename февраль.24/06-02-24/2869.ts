function minOperations(nums: number[], k: number): number {
  const list = new Array(k).fill(false);
  let count = 0;
  while (nums.length !== 0) {
    const elem = nums.pop();
    list[elem - 1] = true;
    count++;
    if (list.every((e) => e)) return count;
  }
  return 0;
}
