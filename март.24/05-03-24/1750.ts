function minimumLength(s: string): number {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    console.log(l, r, s[l], s[r]);
    if (s[l] !== s[r]) break;

    while (s[l] === s[l + 1]) {
      l++;
    }
    while (s[r] === s[r - 1]) {
      r--;
    }
    l++;
    r--;
  }
  return r - l + 1 < 0 ? 0 : r - l + 1;
}
