function maxLengthBetweenEqualCharacters(s: string): number {
  let start: {
    [key: string]: number;
  } = {};
  let end: {
    [key: string]: number;
  } = {};
  for (let i = 0; i < s.length; i++) {
    if (start[s[i]] === undefined) {
      start[s[i]] = i;
    }
  }
  for (let j = s.length - 1; j >= 0; j--) {
    if (end[s[j]] === undefined) {
      end[s[j]] = j;
    }
  }
  let ans = -1;
  for (let key in start) {
    if (end[key] > start[key]) {
      ans = Math.max(ans, end[key] - start[key] - 1);
    }
  }
  return ans;
}
