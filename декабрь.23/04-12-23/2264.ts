function largestGoodInteger(num: string): string {
  let buffer = -1;
  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
      buffer = Math.max(buffer, Number(num[i]));
    }
  }
  if (buffer === -1) return "";
  else return String(buffer) + String(buffer) + String(buffer);
}
