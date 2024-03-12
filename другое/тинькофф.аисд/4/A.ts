const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let n = 0;
let m = -1;
let arr: number[] = [];
const query: number[][] = [];
rl.on("line", (line: string) => {
  if (i === 0) {
    n = Number(line);
    i++;
  } else if (i === 1) {
    arr = line.split(" ").map(Number);
    i++;
  } else if (i === 2) {
    m = Number(line);
    i++;
  } else {
    query.push(line.split(" ").map(Number));
    m--;
  }

  if (m === 0) {
    final();
    rl.close();
  }
});

function final() {
  const prefixSum: number[] = [];
  const prefixXor: number[] = [];
  prefixSum[0] = arr[0];
  prefixXor[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
    prefixXor[i] = prefixXor[i - 1] ^ arr[i];
  }

  const giveXor = (l: number, r: number) => {
    if (l === 1) {
      return prefixXor[r - 1];
    } else {
      return prefixXor[r - 1] ^ prefixXor[l - 2];
    }
  };
  const giveSum = (l: number, r: number) => {
    if (l === 1) {
      return prefixSum[r - 1];
    } else {
      return prefixSum[r - 1] - prefixSum[l - 2];
    }
  };

  for (const [q, l, r] of query) {
    if (q === 1) {
      console.log(giveSum(l, r));
    } else {
      console.log(giveXor(l, r));
    }
  }
}
