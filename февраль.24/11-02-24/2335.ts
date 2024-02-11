function fillCups(amount: number[]): number {
  let ans = 0;
  amount = amount.filter((e) => e !== 0).sort((a, b) => b - a);
  while (amount.length !== 0) {
    if (amount.length === 1) {
      ans += amount[0];
      amount = [];
    } else {
      ans++;
      amount[0]--;
      amount[1]--;
      amount = amount.filter((e) => e !== 0).sort((a, b) => b - a);
    }
  }
  return ans;
}
