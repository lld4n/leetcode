function balancedStringSplit(s: string): number {
  let rc = 0;
  let lc = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      rc++;
    } else {
      lc++;
    }

    if (rc !== 0 && rc === lc) {
      ans++;
      rc = 0;
      lc = 0;
    }
  }
  return ans;
}
