// мое решение
function twoEggDrop(n: number): number {
  let buffer = n;
  if (n === 2) return 2;
  if (n === 1) return 1;
  for (let i = 0; i < n; i++) {
    if (buffer - i <= 0) {
      return i;
    }
    buffer -= i;
  }
  return 0;
}

// решение с leetcode
function twoEggDrop2(n: number): number {
  let range = 0;
  let sum = 0;

  while (sum + range < n) {
    sum += range;
    range++;
  }

  return range;
}
