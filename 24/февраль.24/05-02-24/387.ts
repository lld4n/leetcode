function firstUniqChar(s: string): number {
  const letters = new Array(123).fill(0);
  for (const el of s) {
    letters[el.charCodeAt(0)]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (letters[s[i].charCodeAt(0)] === 1) return i;
  }
  return -1;
}
