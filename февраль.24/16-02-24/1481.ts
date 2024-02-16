function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const map: { [key: number]: number } = {};
  for (const key of arr) map[key] = map[key] ? map[key] + 1 : 1;
  const list = Object.values(map).sort((a, b) => a - b);
  let i = 0;
  while (k > 0) {
    if (list[i] <= k) {
      k -= list[i];
      list[i] = 0;
      i++;
    } else {
      list[i] -= k;
      k = 0;
    }
  }
  return list.filter((e) => e !== 0).length;
}
