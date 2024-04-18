function addStrings(num1: string, num2: string): string {
  while (num1.length !== num2.length) {
    if (num1.length < num2.length) num1 = "0" + num1;
    else num2 = "0" + num2;
  }
  let ans = "";
  let dop = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    const b = Number(num1[i]) + Number(num2[i]) + dop;
    ans = String(b % 10) + ans;
    dop = Math.floor(b / 10);
  }
  if (dop) {
    ans = String(dop) + ans;
  }
  return ans;
}
