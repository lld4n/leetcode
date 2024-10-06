function repeatedSubstringPattern(s: string): boolean {
  const p = prefixFunction(s);
  const k = s.length - p[s.length - 1];
  return s.length % k === 0;
}

function prefixFunction(s: string) {
  let p = new Array<number>(s.length).fill(0);
  for (let i = 1; i < s.length; i++) {
    let current = p[i - 1];
    while (s[i] !== s[current] && current > 0) {
      current = p[current - 1];
    }
    if (s[i] === s[current]) {
      p[i] = current + 1;
    }
  }
  return p;
}
