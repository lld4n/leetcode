let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n, m, q;
let count = 0;
let child;
let contiguity = {};
let hard = [];
let light = [];
let stock;
rl.on("line", function (data) {
  if (count === 0) {
    [n, m, q] = data.split(" ").map(Number);
    stock = new Array(n + 1).fill(0);

    count++;
  } else if (count === 1) {
    const buffer = data.split(" ").map(Number);
    buffer.unshift(0);
    child = [...buffer];
    for (let i = 1; i < child.length; i++) {
      contiguity[i] = [];
    }
    count++;
  } else if (m !== 0) {
    m--;
    const [first, second] = data.split(" ").map(Number);
    contiguity[first].push(second);
    contiguity[second].push(first);
    if (m === 0) {
      const sqrt = Math.sqrt(n);
      for (let key in contiguity) {
        if (contiguity[key].length > sqrt) {
          hard.push(Number(key));
        } else {
          light.push(Number(key));
        }
      }
    }
  } else {
    q--;
    if (data.includes("?")) {
      const [_, index] = data.split(" ");
      const friends = contiguity[Number(index)];
      let answer = 0;
      for (let friend of friends) {
        if (hard.includes(Number(friend))) {
          answer += stock[Number(friend)];
        }
      }
      answer += child[Number(index)];
      console.log(answer);
    } else {
      const [_, index, c] = data.split(" ");
      if (hard.includes(Number(index))) {
        stock[Number(index)] += c;
      } else {
        const friends = contiguity[Number(index)];
        for (let f of friends) {
          child[f] += Number(c);
        }
      }
    }
    if (q === 0) {
      process.exit(0);
    }
  }
});
