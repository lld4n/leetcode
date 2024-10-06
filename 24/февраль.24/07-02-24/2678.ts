function countSeniors(details: string[]): number {
  let ans = 0;
  for (const item of details) {
    const age = Number(item[11] + item[12]);
    if (age > 60) ans++;
  }
  return ans;
}
