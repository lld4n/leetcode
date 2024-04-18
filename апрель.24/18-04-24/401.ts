function readBinaryWatch(turnedOn: number): string[] {
  const g = generate(turnedOn);

  const zero = (min: number): string => {
    if (min <= 9) return "0" + String(min);
    return String(min);
  };

  const q: [number, number][] = [];
  for (const val of g) {
    let h = 0;
    if (val[0]) h += 8;
    if (val[1]) h += 4;
    if (val[2]) h += 2;
    if (val[3]) h += 1;
    let m = 0;
    if (val[4]) m += 32;
    if (val[5]) m += 16;
    if (val[6]) m += 8;
    if (val[7]) m += 4;
    if (val[8]) m += 2;
    if (val[9]) m += 1;
    if (h >= 0 && h <= 11 && m >= 0 && m <= 59) {
      q.push([h, m]);
    }
  }
  const ans: string[] = [];
  for (const b of q) {
    ans.push(String(b[0]) + ":" + zero(b[1]));
  }
  return ans;
}

function generate(n: number): boolean[][] {
  const ans: boolean[][] = [];

  const dfs = (i: number, r: boolean[]) => {
    if (r.length === 10 && i === 0) {
      ans.push(r);
      return;
    }
    if (r.length >= 10) return;
    if (i > 0) dfs(i - 1, [...r, true]);
    dfs(i, [...r, false]);
  };
  dfs(n, []);
  return ans;
}
