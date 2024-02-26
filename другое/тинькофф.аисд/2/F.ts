const n = 7;
const lst = [[1, 1], [5], [1, 3], [3], [2], [1, 2], [4, 2]];
const stack: number[] = [];
for (const item of lst) {
  if (item[0] === 1) {
    stack.push(item[1]);
  } else if (item[0] === 2) {
    stack.shift();
  } else if (item[0] === 3) {
    stack.pop();
  } else if (item[0] === 4) {
    console.log(stack.indexOf(item[1]) + 1);
  } else {
    console.log(stack[0]);
  }
}
