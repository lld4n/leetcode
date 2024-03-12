const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let n = -1;
let m = -1;
let k = -1;
let i = 0;
const arr: number[][] = [];
const query: number[][] = [];
rl.on("line", (line: string) => {
  if (i === 0) {
    [n, m, k] = line.split(" ").map(Number);
    i++;
  } else {
    if (n !== 0) {
      arr.push(line.split(" ").map(Number));
      n--;
    } else {
      query.push(line.split(" ").map(Number));
      k--;
    }
  }
  if (k === 0) {
    final();
    rl.close();
  }
});

let pref: number[][] = [];
function precalc() {
  pref = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    pref.push(new Array(arr[0].length).fill(0));
  }
  pref[0][0] = arr[0][0];

  for (let i = 1; i < n; i++) {
    pref[i][0] = pref[i - 1][0] + arr[i][0];
  }

  for (let i = 1; i < m; i++) {
    pref[0][i] = pref[0][i - 1] + arr[0][i];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      pref[i][j] =
        pref[i - 1][j] +
        pref[i][j - 1] -
        pref[i - 1][j - 1] +
        arr[i][j];
    }
  }
}

function calc(x1: number, y1: number, x2: number, y2: number) {
  return (
    pref[x2][y2] -
    (x1 ? pref[x1 - 1][y2] : 0) -
    (y1 ? pref[x2][y1 - 1] : 0) +
    (x1 && y1 ? pref[x1 - 1][y1 - 1] : 0)
  );
}

function final() {
  precalc();
  console.log(pref);
  for (const [y1, x1, y2, x2] of query) {
    console.log(calc(x1 - 1, y1 - 1, x2 - 1, y2 - 1));
  }
}
