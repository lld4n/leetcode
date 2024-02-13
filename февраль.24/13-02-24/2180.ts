function countEven(num: number): number {
  let ans = 0;
  for (let i = 2; i <= num; i++) {
    if (_.sum(String(i).split("").map(Number)) % 2 === 0) ans++;
  }
  return ans;
}
