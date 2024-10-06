function largestInteger(num: number): number {
  const even = String(num)
    .split("")
    .filter((e) => Number(e) % 2 === 0)
    .sort()
    .reverse();
  const odd = String(num)
    .split("")
    .filter((e) => Number(e) % 2 !== 0)
    .sort()
    .reverse();
  let ans = "";
  for (let i = 0; i < String(num).length; i++) {
    if (Number(String(num)[i]) % 2 === 0) {
      const b = even.shift();
      if (b) ans += b;
    } else {
      const b = odd.shift();
      if (b) ans += b;
    }
  }
  return Number(ans);
}
