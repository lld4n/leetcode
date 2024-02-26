const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stack = [];

let n = 0;

rl.on("line", (line) => {
  if (n === 0) {
    n = parseInt(line);
  } else {
    n--;
    const tokens = line.split(" ");
    if (tokens[0] === "1") {
      stack.push(parseInt(tokens[1]));
    } else if (tokens[0] === "2") {
      stack.shift();
    } else if (tokens[0] === "3") {
      stack.pop();
    } else if (tokens[0] === "4") {
      rl.write(String(stack.indexOf(parseInt(tokens[1]))) + "\n");
    } else {
      rl.write(stack[0]);
    }
    if (n === 0) {
      process.exit(0);
    }
  }
});

// rl.on("close", () => {
//   process.exit(0);
// });
