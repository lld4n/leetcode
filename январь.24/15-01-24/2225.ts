function findWinners(matches: number[][]): number[][] {
  let map: {
    [key: number]: {
      w: number;
      l: number;
    };
  } = {};
  for (const elem of matches) {
    if (map[elem[0]]) {
      map[elem[0]].w++;
    } else {
      map[elem[0]] = {
        w: 1,
        l: 0,
      };
    }
    if (map[elem[1]]) {
      map[elem[1]].l++;
    } else {
      map[elem[1]] = {
        w: 0,
        l: 1,
      };
    }
  }
  const ans: number[][] = [[], []];
  for (const key in map) {
    if (map[key].l === 0) {
      ans[0].push(Number(key));
    } else if (map[key].l === 1) {
      ans[1].push(Number(key));
    }
  }
  return ans;
}
