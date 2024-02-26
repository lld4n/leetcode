const n = 6;
const lst: number[] = [3, 1, 6, 4, 5, 2];

const prefix: number[] = [0];
const lbor: number[] = new Array(n).fill(0);
const rbor: number[] = new Array(n).fill(0);

const lstack: [number, number][] = [[-1, -1]];
const rstack: [number, number][] = [[-1, n]];

for (let i = 0; i < lst.length; i++) {
  prefix.push(prefix[prefix.length - 1] + lst[i]);

  while (lstack[lstack.length - 1][0] >= lst[i]) {
    lstack.pop();
  }
  lbor[i] = lstack[lstack.length - 1][1] + 1;
  lstack.push([lst[i], i]);
}

for (let i = lst.length - 1; i >= 0; i--) {
  while (rstack[rstack.length - 1][0] >= lst[i]) {
    rstack.pop();
  }
  rbor[i] = rstack[rstack.length - 1][1] - 1;
  rstack.push([lst[i], i]);
}
let ans = 0;
for (let i = 0; i < lst.length; i++) {
  const sm = prefix[rbor[i] + 1] - prefix[lbor[i]];
  ans = Math.max(ans, sm * lst[i]);
}
console.log(ans);
