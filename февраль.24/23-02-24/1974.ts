function minTimeToType(word: string): number {
  let lst = "a".charCodeAt(0);
  let ans = 0;
  for (const l of word) {
    const cur = l.charCodeAt(0);
    if (cur < lst) {
      ans += Math.min(Math.abs(cur - lst), 122 - lst + cur - 97 + 1);
    } else if (cur > lst) {
      ans += Math.min(Math.abs(cur - lst), 122 - cur + lst - 97 + 1);
    }
    ans++;
    lst = cur;
  }
  return ans;
}
