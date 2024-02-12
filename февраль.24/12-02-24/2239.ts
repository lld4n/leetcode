function findClosestNumber(nums: number[]): number {
  let negMax = -Infinity;
  let posMin = Infinity;
  for (const n of nums) {
    if (n === 0) return 0;
    if (n > 0) {
      posMin = Math.min(posMin, n);
    } else {
      negMax = Math.max(negMax, n);
    }
  }
  if (posMin !== Infinity && negMax !== -Infinity) {
    if (Math.abs(negMax) < posMin) {
      return negMax;
    } else if (Math.abs(negMax) > posMin) {
      return posMin;
    } else {
      return posMin;
    }
  }
  if (posMin === Infinity) {
    return negMax;
  } else if (negMax === -Infinity) {
    return posMin;
  }
  return 0;
}
