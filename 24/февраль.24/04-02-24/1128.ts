function numEquivDominoPairs(dominoes: [number, number][]): number {
  const map: {
    [key: string]: number;
  } = {};
  for (const dom of dominoes) {
    let key = "";
    if (dom[0] > dom[1]) {
      key = dom[1] + "_" + dom[0];
    } else {
      key = dom[0] + "_" + dom[1];
    }
    if (map[key]) {
      map[key]++;
    } else {
      map[key] = 1;
    }
  }

  let ans = 0;
  for (const key in map) {
    for (let i = 1; i < map[key]; i++) {
      ans += i;
    }
  }
  return ans;
}
