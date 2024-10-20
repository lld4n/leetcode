function parseBoolExpr(expression: string): boolean {
  if (expression === "t") {
    return true;
  }

  if (expression === "f") {
    return false;
  }

  if (expression.startsWith("!")) {
    const b = expression.slice(2, -1);
    return !parseBoolExpr(b);
  }

  if (expression.startsWith("&")) {
    const sli = expression.slice(2, -1);
    const b = spl(sli);

    let ans = parseBoolExpr(b[0]);

    for (const item of b) {
      ans = ans && parseBoolExpr(item);
    }

    return ans;
  }

  if (expression.startsWith("|")) {
    const sli = expression.slice(2, -1);
    const b = spl(sli);

    let ans = parseBoolExpr(b[0]);

    for (const item of b) {
      ans = ans || parseBoolExpr(item);
    }

    return ans;
  }

  throw new Error("52");
}

function spl(expression: string): string[] {
  const res = [];

  let c = 0;
  let b = "";
  for (const letter of expression) {
    if (letter === "(") {
      c++;
    }

    if (letter === ")") {
      c--;
    }

    b += letter;

    if (letter === ",") {
      if (c === 0) {
        res.push(b.slice(0, -1));
        b = "";
      }
    }
  }

  if (b.length > 0) {
    res.push(b);
  }

  return res;
}
