function isCovered(ranges: number[][], left: number, right: number): boolean {
  const list = new Array(right + 1).fill(false);
  for (let i = 0; i < left; i++) {
    list[i] = true;
  }
  for (const item of ranges) {
    const [start, end] = item;
    if (start <= right && end >= left) {
      for (let i = left; i <= right; i++) {
        if (i >= start && i <= end) {
          list[i] = true;
        }
      }
    }
  }
  return list.every((e) => e);
}
