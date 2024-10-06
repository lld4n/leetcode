function countDigits(num: number): number {
  const list = num.toString().split("");
  let ans = 0;
  for (const item of list) {
    if (num % Number(item) === 0) ans++;
  }
  return ans;
}
