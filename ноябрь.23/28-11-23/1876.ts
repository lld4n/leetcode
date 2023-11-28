function countGoodSubstrings(s: string): number {
  if (s.length < 3) return 0;
  let b: [string, string, string] = [s[0], s[1], s[2]];
  let count = checkRepeat(b);
  for (let i = 3; i < s.length; i++) {
    b.shift();
    b.push(s[i]);
    count += checkRepeat(b);
  }
  return count;
}

function checkRepeat(b: [string, string, string]) {
  return !(b[0] === b[1] || b[0] === b[2] || b[1] === b[2]) ? 1 : 0;
}
