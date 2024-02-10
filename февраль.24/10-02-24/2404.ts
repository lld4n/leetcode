function mostFrequentEven(nums: number[]): number {
  const list = nums.filter((e) => e % 2 === 0);
  if (list.length === 0) return -1;
  const map: number[] = new Array(Math.max(...list) + 1).fill(0);
  for (const item of list) map[item]++;
  return map.indexOf(Math.max(...map));
}
