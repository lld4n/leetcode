function toHex(num: number): string {
  if (num === 0) return "0";
  if (num < 0) num = 2 ** 32 + num;
  let ans = "";
  while (num > 0) {
    const b = num % 16;
    if (b === 10) ans += "a";
    else if (b === 11) ans += "b";
    else if (b === 12) ans += "c";
    else if (b === 13) ans += "d";
    else if (b === 14) ans += "e";
    else if (b === 15) ans += "f";
    else ans += String(b);
    num = Math.floor(num / 16);
  }
  return ans.split("").reverse().join("");
}
