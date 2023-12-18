let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
let n, m;
rl.on("line", function (data) {
  if (count === 0) {
    [n, m] = data.split(" ").map(Number);
    count++;
  } else {
    let list = data.split(" ").map(Number);
    console.log(my(list, m));
    process.exit(0);
  }
});

function my(array, m) {
  let mn = m;
  for (let i = 0; i < array.length; i++) {
    mn = Math.max(array[i] - 1, mn - array[i]);
  }
  return mn;
}
