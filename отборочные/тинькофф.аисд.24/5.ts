const n = 2;
const m = 3;
const k = 5;
const l: string[] = ["1 3 2", "2 3 1", "1 4 2"];
const jlist = [3, 3, 3, 3, 4];
const mp: {
  [key: number]: {
    [k: number]: number;
  };
} = {};
for (let i = 0; i < m; i++) {
  const [u, d, v] = l[i].split(" ").map(Number);
  if (mp[u]) {
    mp[u][d] = v;
  } else {
    mp[u] = {
      [d]: v,
    };
  }
}

function ff() {
  let s = 1;
  for (const el of jlist) {
    if (mp[s][el]) {
      s = mp[s][el];
    } else {
      return 0;
    }
  }
  return s;
}

console.log(ff());
