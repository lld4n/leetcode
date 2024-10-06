function minimumMoves(s: string): number {
  let ans = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] === "X") {
      ans++;
      i += 3;
    } else {
      i++;
    }
  }
  return ans;
}
