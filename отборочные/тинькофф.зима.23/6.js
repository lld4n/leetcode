let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n, q;
let count = 0;
let nums;
rl.on("line", function (data) {
  if (count === 0) {
    [n, q] = data.split(" ").map(Number);
    count++;
  } else if (count === 1) {
    const buffer = data.split(" ").map(Number);
    buffer.unshift(0);
    nums = [...buffer];
    count++;
  } else {
    if (data.includes("?")) {
      const [_, l, r, k, b] = data.split(" ");
      let answer = -Infinity;
      for (let i = Number(l); i <= Number(r); i++) {
        const buffer = Math.min(nums[i], Number(k) * i + Number(b));
        if (buffer > answer) {
          answer = buffer;
        }
      }
      console.log(answer);
    } else {
      const [_, l, r, x] = data.split(" ");
      for (let i = Number(l); i <= Number(r); i++) {
        nums[i] += Number(x);
      }
    }
    q--;
    if (q === 0) {
      process.exit(0);
    }
  }
});
