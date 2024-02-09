function alternateDigitSum(n: number): number {
  const str = String(n).split("");
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) ans += Number(str[i]);
    else ans -= Number(str[i]);
  }
  return ans;
}
