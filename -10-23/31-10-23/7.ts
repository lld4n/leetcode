function reverse(x: number): number {
  let negative = false;
  let res = "";
  if (x < 0) {
    negative = true;
    res = String(x).replace("-", "");
  } else {
    res = String(x);
  }

  let answer = negative ? "-" : "";
  for (let i = res.length - 1; i >= 0; i--) {
    answer += res[i];
  }

  if (
    Number(answer) &&
    Number(answer) < 2 ** 31 - 1 &&
    Number(answer) > -(2 ** 31)
  ) {
    return Number(answer);
  } else {
    return 0;
  }
}
