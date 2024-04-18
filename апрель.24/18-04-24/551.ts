function checkRecord(s: string): boolean {
  if (s.split("").filter((e) => e === "A").length >= 2) return false;
  let q = 0;
  for (const l of s) {
    if (l === "L") q++;
    else q = 0;

    if (q >= 3) return false;
  }
  return true;
}
