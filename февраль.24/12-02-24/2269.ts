function divisorSubstrings(num: number, k: number): number {
  let ans = 0;
  for (let i = 0; i < String(num).length - k; i++) {
    const buffer = Number(String(num).slice(i, i + k + 1));
    if (buffer !== 0 && num % buffer === 0) {
      ans++;
    }
  }
  return ans;
}
