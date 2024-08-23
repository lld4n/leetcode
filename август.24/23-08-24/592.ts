function fractionAddition(expression: string): string {
  const items: [number, number][] = [];
  const exc: string[] = [];

  let f = "";
  let s = "";
  let slash = false;
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "/") {
      slash = true;
    } else if (expression[i] === "+" || expression[i] === "-") {
      items.push([Number(f), Number(s)]);
      f = "";
      s = "";
      exc.push(expression[i]);
      slash = false;
    } else {
      if (slash) {
        s += expression[i];
      } else {
        f += expression[i];
      }
    }
  }
  if (f.length > 0) {
    items.push([Number(f), Number(s)]);
  }
  let ans = items.shift()!;
  console.log(items);
  while (exc.length > 0) {
    const e = exc.shift()!;
    const item = items.shift()!;
    if (ans[1] === 0) ans[1] = 0;
    const bottom = ans[1] * item[1];
    if (e === "+") {
      const top = ans[0] * item[1] + ans[1] * item[0];
      ans = [top, bottom];
    } else {
      const top = ans[0] * item[1] - ans[1] * item[0];
      ans = [top, bottom];
    }
  }

  const mm = Math.max(...ans);
  let i = 2;
  while (i < mm) {
    if (ans[0] % i !== 0) i++;
    else if (ans[1] % i !== 0) i++;
    else ans = [ans[0] / i, ans[1] / i];
  }
  return ans[0] + "/" + ans[1];
}
