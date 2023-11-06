function getLastMoment(n: number, left: number[], right: number[]): number {
  let ans = 0;
  console.log(left, right);
  let count = left.length + right.length;
  while (count > 0) {
    ans++;
    for (let i = 0; i < left.length; i++) {
      if (left[i] !== -1) {
        left[i]--;
        if (left[i] < 0) {
          left[i] = -1;
          count--;
        }
      }
    }
    for (let i = 0; i < right.length; i++) {
      if (right[i] !== -1) {
        right[i]++;
        if (right[i] > n) {
          right[i] = -1;
          count--;
        }
      }
    }
    console.log(left, right);
  }
  console.log(left, right);
  return ans;
}
