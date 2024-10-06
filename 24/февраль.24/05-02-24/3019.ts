function countKeyChanges(s: string): number {
  s = s.toLowerCase();
  let ans = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) ans++;
  }
  return ans;
}
