let n = 4;
let lst = [4, 1, 3, 2];

const stack: number[] = [];
let cur = 0;
const ans: [number, number][] = [];
let k = 0;
while (lst.length > 0) {
  const item = lst.shift()!;
  stack.push(item);
  k++;
  if (cur + 1 === stack[stack.length - 1]) {
    ans.push([1, k]);
    k = 0;
  }
  let flag = false;
  while (cur + 1 === stack[stack.length - 1]) {
    flag = true;
    k++;
    cur = stack.pop()!;
  }
  if (flag) {
    ans.push([2, k]);
    k = 0;
  }
}
console.log(ans);

if (stack.length === n) {
  console.log(ans.length);
  for (const item of ans) {
    console.log(item.join(" "));
  }
} else {
  console.log(0);
}
