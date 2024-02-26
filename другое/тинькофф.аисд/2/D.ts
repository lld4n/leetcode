const n = 5;
const lst = [1, 3, 3, 3, 2];
lst.push(-1);
const stack: number[] = [];

const c = (): boolean => {
  if (stack.length < 3) return false;

  return (
    stack[stack.length - 1] === stack[stack.length - 2] &&
    stack[stack.length - 2] === stack[stack.length - 3]
  );
};

for (let i = 0; i < lst.length - 1; i++) {
  stack.push(lst[i]);
  if (lst[i] !== lst[i + 1] && c()) {
    const b = stack.pop();
    while (stack[stack.length - 1] === b) {
      stack.pop();
    }
  }
}
console.log(n - stack.length);
