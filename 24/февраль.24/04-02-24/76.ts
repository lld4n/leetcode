function minWindow(s: string, t: string): string {
  const window: number[] = new Array(123).fill(0);
  const map: number[] = new Array(123).fill(0);
  let ans: [number, number][] = [];
  let j = -1;
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== undefined) {
      j++;
      window[s[i].charCodeAt(0)]++;
    }
    map[t[i].charCodeAt(0)]++;
  }
  let i = 0;
  while (j < s.length) {
    while (!equal(window, map)) {
      j++;
      if (s[j] === undefined) break;
      window[s[j].charCodeAt(0)]++;
    }
    while (equal(window, map)) {
      ans.push([i, j]);
      window[s[i].charCodeAt(0)]--;
      i++;
    }
  }
  ans = ans.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  if (ans.length === 0) {
    return "";
  }
  const indexes = ans[0];
  console.log(indexes);
  return s.slice(indexes[0], indexes[1] + 1);
}

function equal(window: number[], map: number[]) {
  for (let i = 0; i < map.length; i++) {
    if (window[i] < map[i]) {
      return false;
    }
  }
  return true;
}
