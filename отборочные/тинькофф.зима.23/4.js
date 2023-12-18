let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
let countNodes = 0;
let companies = [];
let nodes = [[]];
let contiguity = {};
let n, k;
rl.on("line", function (data) {
  if (count === 0) {
    [n, k] = data.split(" ").map(Number);
    count++;
  } else if (count <= k) {
    companies.push(data);
    count++;
  } else {
    const [parent, value, action] = data.split(" ");
    nodes.push([Number(value), action]);
    countNodes++;
    contiguity[countNodes] = [];
    if (parent !== "0") {
      contiguity[parent].push(countNodes);
    }
    if (countNodes === n) {
      const dfs = (index, comp) => {
        comp.add(nodes[Number(index)][1]);
        const children = contiguity[index];
        let result = nodes[Number(index)][0];
        for (let nodeIndex of children) {
          result += dfs(String(nodeIndex), comp);
        }
        return result;
      };

      let answer = Infinity;
      for (let i = 1; i < nodes.length; i++) {
        let comp = new Set();
        const res = dfs(String(i), comp);
        let flag = true;
        for (let el of companies) {
          if (!comp.has(el)) {
            flag = false;
          }
        }
        if (flag) {
          answer = Math.min(res, answer);
        }
      }
      if (answer === Infinity) {
        console.log(-1);
      } else {
        console.log(answer);
      }
      process.exit(0);
    }
  }
});
