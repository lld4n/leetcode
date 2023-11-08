function isReachableAtTime(
  sx: number,
  sy: number,
  fx: number,
  fy: number,
  t: number,
): boolean {
  if (fx === sx && fy === sy && t === 1) return true;
  const fxsx = Math.abs(fx - sx);
  const fysy = Math.abs(fy - sy);
  return Math.max(fxsx, fysy) <= t;
}
