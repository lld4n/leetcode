const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line: string) => {
  const [n, k] = line.split(" ").map(Number);
  const remains = k % n;
  const whole = Math.floor(k / n);
  console.log(n, k, remains, whole);
  if (remains === 0) {
    console.log(whole * n);
  } else {
    console.log((whole + 1) * remains);
  }
  rl.close();
});
