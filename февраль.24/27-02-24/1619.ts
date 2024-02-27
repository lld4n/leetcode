function trimMean(arr: number[]): number {
  arr = arr.sort((a, b) => a - b);
  let del = Math.floor(arr.length * 0.05);
  while (del !== 0) {
    del--;
    arr.pop();
    arr.shift();
  }
  return _.mean(arr);
}
