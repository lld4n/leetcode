function reverseStr(s: string, k: number): string {
  let q = "";
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (q.length === 2 * k) {
      ans += q
        .slice(0, k + 1)
        .split("")
        .reverse()
        .join("");
      ans += q.slice(k + 1);
      q = "";
    }
    q += s[i];
  }
  if (q.length < k) {
    ans += q.split("").reverse().join("");
  } else {
    ans += q
      .slice(0, k + 1)
      .split("")
      .reverse()
      .join("");
    ans += q.slice(k + 1);
  }
  return ans;
}
