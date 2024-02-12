function countPrefixes(words: string[], s: string): number {
  let ans = 0;
  for (const prefix of words) {
    let flag = false;
    for (let i = 0; i < prefix.length; i++) {
      if (s[i] !== prefix[i]) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    if (flag) ans++;
  }
  return ans;
}
