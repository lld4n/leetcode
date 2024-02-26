function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const token of tokens) {
    console.log(stack);
    if (token === "+") {
      const second = stack.pop();
      const first = stack.pop();
      stack.push(first! + second!);
    } else if (token === "-") {
      const second = stack.pop();
      const first = stack.pop();
      stack.push(first! - second!);
    } else if (token === "*") {
      const second = stack.pop();
      const first = stack.pop();
      stack.push(first! * second!);
    } else if (token === "/") {
      const second = stack.pop();
      const first = stack.pop();
      const res = first! / second!;
      if (res > 0) {
        stack.push(Math.floor(res));
      } else {
        stack.push(Math.ceil(res));
      }
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
}
