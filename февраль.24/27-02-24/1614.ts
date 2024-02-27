function maxDepth(s: string): number {
  let ans = 0;
  let q = 0;
  for (const l of s) {
    if (l === "(") {
      q++;
      ans = Math.max(ans, q);
    } else if (l === ")") {
      q--;
    }
  }
  return ans;
}
