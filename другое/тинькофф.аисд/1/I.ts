const ln = 4;
const arr = [1, 3, 4, 2];

const lst = new Array(ln).fill(0);
const ans: number[] = [1];
let cL = 0;
let zero = ln - 1;
for (const item of arr) {
  lst[item - 1] = 1;
  if (item - 1 === zero) {
    for (let i = zero; i >= 0; i--) {
      if (lst[i] === 0) {
        zero = i;
        break;
      } else {
        cL--;
      }
    }
  } else {
    cL++;
  }

  ans.push(cL + 1);
}
console.log(ans.join(" "));
