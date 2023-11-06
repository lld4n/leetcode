function sumExcept(a, i, n) {
  let index = i;
  let count = n;
  if (!isFinite(i) || i < 0) {
    index = 0;
  }

  if (!isFinite(n) || n < 0) {
    count = 0;
  }
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    let b = a[i];
    if (!isFinite(a[i])) {
      b = 0;
    }

    if (count !== 0 && i >= index) {
      count--;
    } else {
      sum += b;
    }
  }
  return sum;
}

module.exports = sumExcept;
