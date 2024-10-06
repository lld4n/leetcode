function sumZero(n: number): number[] {
  const ans: number[] = [];
  if (n % 2 !== 0) {
    n--;
    ans.push(0);
  }

  for (let i = -(n / 2); i <= n / 2; i++) {
    if (i !== 0) {
      ans.push(i);
    }
  }
  return ans;
}
