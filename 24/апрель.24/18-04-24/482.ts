function licenseKeyFormatting(s: string, k: number): string {
  const list = s
    .toUpperCase()
    .split("")
    .filter((e) => e !== "-");
  let ans = "";
  let q = 0;
  for (let i = list.length - 1; i >= 0; i--) {
    q++;
    if (q % k === 0) {
      q = 0;
      ans = list[i] + ans;
      if (i !== 0) ans = "-" + ans;
    } else {
      ans = list[i] + ans;
    }
  }
  return ans;
}
