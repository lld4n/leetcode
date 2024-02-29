function findLucky(arr: number[]): number {
  const list: number[] = new Array(501).fill(0);
  for (const n of arr) list[n]++;

  for (let i = list.length - 1; i >= 1; i--) {
    if (list[i] === i) return i;
  }
  return -1;
}
