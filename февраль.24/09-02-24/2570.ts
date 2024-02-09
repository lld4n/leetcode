function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const map: { [key: number]: number } = {};
  for (const item of nums1)
    map[item[0]] = map[item[0]] ? map[item[0]] + item[1] : item[1];
  for (const item of nums2)
    map[item[0]] = map[item[0]] ? map[item[0]] + item[1] : item[1];

  return Object.entries(map)
    .map((e) => [Number(e[0]), e[1]])
    .sort((a, b) => a[0] - b[0]);
}
