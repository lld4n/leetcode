let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let total = 0;
let count = 0;
rl.on("line", function (data) {
  if (count === 0) {
    total = Number(data);
    count++;
  } else {
    total--;
    console.log(checking(data));
    if (total === 0) {
      process.exit(0);
    }
  }
});
let good = {
  T: 1,
  I: 1,
  N: 1,
  K: 1,
  O: 1,
  F: 2,
};
function checking(data) {
  if (data.length > 7 || data.length < 7) {
    return "No";
  }
  let buffer = {};
  for (let el of data) {
    if (!good[el]) {
      return "No";
    }
    if (buffer[el]) {
      buffer[el]++;
    } else {
      buffer[el] = 1;
    }
  }

  for (let key in good) {
    if (buffer[key]) {
      if (buffer[key] !== good[key]) {
        return "No";
      }
    } else {
      return "No";
    }
  }
  return "Yes";
}
