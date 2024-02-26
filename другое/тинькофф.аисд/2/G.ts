const n = 7;
const lst = [
  ["+", "1"],
  ["+", "2"],
  ["-"],
  ["+", "3"],
  ["+", "4"],
  ["-"],
  ["-"],
];

const left: number[] = [];
const right: number[] = [];

for (const item of lst) {
  if (item[0] === "+") {
    right.push(Number(item[1]));
    if (left.length < right.length) {
      left.push(right.shift()!);
    }
  } else if (item[0] === "*") {
    if (left.length === right.length) {
      left.push(Number(item[1]));
    } else {
      right.push(Number(item[1]));
    }
  } else {
    console.log(left.shift()!);

    const b = right.shift();
    if (b) left.push(b);
  }
}
