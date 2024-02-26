const n = 8;
const lst = [[1, 2], [1, 3], [1, -3], [3], [2], [3], [2], [3]];

const arr: number[] = [];
let mn: number[] = [];
for (const item of lst) {
  if (item.length === 2) {
    if (mn.length === 0 || item[1] <= mn[mn.length - 1])
      mn.push(item[1]);
    arr.push(item[1]);
  } else if (item[0] === 2) {
    const item = arr.pop();
    if (item === mn[mn.length - 1]) {
      mn.pop();
    }
  } else {
    console.log(mn[mn.length - 1]);
  }
}
