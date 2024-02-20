function qsort(a: number[], left: number, right: number): number {
  let comparisons = 0;
  if (right <= left) return comparisons;
  const q = a[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (a[i] < q) {
      ++i;
      comparisons++;
    }
    while (a[j] > q) {
      --j;
      comparisons++;
    }
    if (i <= j) {
      [a[i], a[j]] = [a[j], a[i]];
      ++i;
      --j;
    }
  }
  comparisons += qsort(a, left, j);
  comparisons += qsort(a, i, right);
  return comparisons;
}
