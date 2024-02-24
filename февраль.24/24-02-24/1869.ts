function checkZeroOnes(s: string): boolean {
  let os = 0;
  let zs = 0;
  let mos = 0;
  let mzs = 0;
  s += s[s.length - 1] === "1" ? "0" : "1";
  for (const l of s) {
    if (l === "1") {
      mzs = Math.max(zs, mzs);
      zs = 0;
      os++;
    } else {
      mos = Math.max(os, mos);
      os = 0;
      zs++;
    }
  }
  return mos > mzs;
}
