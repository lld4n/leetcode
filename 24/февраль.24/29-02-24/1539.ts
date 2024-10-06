function findKthPositive(arr: number[], k: number): number {
  const list: number[] = [];
  let i = 0;
  let cur = 1;
  while (list.length !== k) {
    if (cur < arr[i] || arr[i] === undefined) {
      list.push(cur);
      cur++;
    } else {
      i++;
      cur++;
    }
  }
  return list[list.length - 1];
}
