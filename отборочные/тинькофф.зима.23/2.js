let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
let n;
let q = 0;
rl.on("line", function (data) {
  if (count === 0) {
    n = Number(data);
    count++;
  } else {
    q++;
    if (q === 2) {
      console.log(my(data.split(" ").map(Number)));
      n--;
      q = 0;
    }
    if (n === 0) {
      process.exit(0);
    }
  }
});

function my(arr) {
  const n = arr.length;
  if (n === 1) return "Yes";
  let sum = arr.reduce((acc, val) => acc + val, 0);
  if (sum < 2 * (n - 1)) return "No";
  return "Yes";
}
