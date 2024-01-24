function countBits(n: number): number[] {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  const list = new Array(n + 1).fill(-1);
  list[0] = 0;
  list[1] = 1;
  let buffer = -1;
  for (let i = 2; i <= n; i++) {
    if (checkTwice(i)) {
      list[i] = 1;
      buffer = i;
    } else {
      list[i] = 1 + list[i - buffer];
    }
  }
  return list;
}
function checkTwice(n: number) {
  if (n % 2 !== 0) {
    return false;
  } else {
    let i = 1;
    while (i < n) {
      i *= 2;
    }
    return i === n;
  }
}
