function maximumOddBinaryNumber(s: string): string {
  const count = s.split("").filter((e) => e === "1").length - 1;
  let ans = new Array(count).fill(1).join("");
  ans += new Array(s.length - count - 1).fill(0).join("");
  return ans + "1";
}
