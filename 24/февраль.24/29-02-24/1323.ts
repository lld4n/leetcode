function maximum69Number(num: number): number {
  const s = String(num).split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "6") {
      s[i] = "9";
      break;
    }
  }
  return Number(s.join(""));
}
