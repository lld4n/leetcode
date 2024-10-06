function numberOfPoints(nums: number[][]): number {
  const list = new Array(
    Math.max(...nums.map((el) => Math.max(...el))) + 1,
  ).fill(0);
  for (const item of nums) {
    for (let i = item[0]; i <= item[1]; i++) {
      list[i]++;
    }
  }
  return list.filter((e) => e !== 0).length;
}
