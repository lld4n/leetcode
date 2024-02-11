function calculateTax(brackets: number[][], income: number): number {
  let ans = 0;
  let i = 0;
  while (income !== 0) {
    if (i === 0) {
      const cur = brackets[i][0];
      if (cur <= income) {
        ans += (brackets[i][1] / 100) * cur;
        income -= cur;
        i++;
      } else {
        ans += (brackets[i][1] / 100) * income;
        income = 0;
      }
    } else {
      const cur = brackets[i][0] - brackets[i - 1][0];
      if (cur <= income) {
        ans += (brackets[i][1] / 100) * cur;
        income -= cur;
        i++;
      } else {
        ans += (brackets[i][1] / 100) * income;
        income = 0;
      }
    }
  }
  return ans;
}
