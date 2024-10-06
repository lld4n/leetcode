function findContentChildren(g: number[], s: number[]): number {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let ans = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      i++;
      ans++;
    }
    j++;
  }
  return ans;
}
